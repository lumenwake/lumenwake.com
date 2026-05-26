'use client'

import Arrow from "@/public/left-arrow.png"

import staticData from "@/staticData/staticData";
import styles from "./projects.module.scss";

import clsx from "clsx";

import { useCallback, useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Image, { StaticImageData } from "next/image";

import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";

import { Heading } from "@/components/shared/heading";
import { Button } from "@/components/shared/button";
import { Text } from "@/components/shared/text"

interface ArrowComponentProps {
    cls: string | undefined;
    onClick?: () => void;
    disabled?: boolean;
    ariaLabel: string;
}

const ArrowComponent = ({
    cls,
    onClick,
    disabled,
    ariaLabel
}: ArrowComponentProps) => (
    <button
        type="button"
        className={clsx(styles.arrow, cls, disabled && styles.arrowDisabled)}
        onClick={onClick}
        disabled={disabled}
        aria-label={ariaLabel}
    >
        <Image
            src={Arrow.src}
            width={26}
            height={90}
            alt=""
        />
    </button>
)

interface GameSlideProps {
    title: string,
    description: string,
    character: StaticImageData,
    id: string
}

const GameSlide = ({
    title,
    description,
    character,
    id
}: GameSlideProps) => {
    const router = useRouter();

    function openDetails() {
        router.push(`/projects/${id}`)
    }

    return (
        <div className={styles.slide}>
            <div className={styles.content}>
                <div className={styles.description}>
                    <Heading className={styles.title}>{title}</Heading>
                    <Text>
                        {description}
                    </Text>

                    <Button
                        value="See details"
                        onClick={openDetails}
                    />
                </div>
                <div className={styles.image}>
                    <Image
                        src={character}
                        width={512}
                        height={512}
                        alt={title}
                    />
                </div>
            </div>
        </div>
    )
}

export default function Projects() {
    const projectsData = staticData.projects;

    const [emblaRef, emblaApi] = useEmblaCarousel(
        {
            loop: true,
            align: "center",
            skipSnaps: false,
            duration: 30
        },
        [Autoplay({ delay: 6000, stopOnInteraction: true, stopOnMouseEnter: true })]
    );

    const [selectedIndex, setSelectedIndex] = useState(0);

    const scrollPrev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi]);
    const scrollNext = useCallback(() => emblaApi?.scrollNext(), [emblaApi]);
    const scrollTo = useCallback(
        (index: number) => emblaApi?.scrollTo(index),
        [emblaApi]
    );

    useEffect(() => {
        if (!emblaApi) return;

        const onSelect = () => setSelectedIndex(emblaApi.selectedScrollSnap());
        onSelect();
        emblaApi.on("select", onSelect);
        emblaApi.on("reInit", onSelect);

        return () => {
            emblaApi.off("select", onSelect);
            emblaApi.off("reInit", onSelect);
        };
    }, [emblaApi]);

    return (
        <div className={styles.projects} id="projects">
            <ArrowComponent
                cls={styles.leftArrow}
                onClick={scrollPrev}
                ariaLabel="Previous project"
            />

            <div className={styles.viewport} ref={emblaRef}>
                <div className={styles.container}>
                    {projectsData.map(project => (
                        <GameSlide
                            key={project.id}
                            title={project.name}
                            description={project.description}
                            character={project.character}
                            id={project.id}
                        />
                    ))}
                </div>
            </div>

            <ArrowComponent
                cls={styles.rightArrow}
                onClick={scrollNext}
                ariaLabel="Next project"
            />

            <div className={styles.dots} role="tablist" aria-label="Project slides">
                {projectsData.map((project, idx) => (
                    <button
                        key={project.id}
                        type="button"
                        role="tab"
                        aria-label={`Go to ${project.name}`}
                        aria-selected={selectedIndex === idx}
                        className={clsx(
                            styles.dot,
                            selectedIndex === idx && styles.dotActive
                        )}
                        onClick={() => scrollTo(idx)}
                    />
                ))}
            </div>
        </div>
    )
}
