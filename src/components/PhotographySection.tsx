"use client";

import dynamic from "next/dynamic";
import Image from "next/image";
import { useState, useCallback } from "react";
import { photos } from "@/data/photos";
import SectionHead from "./SectionHead";

const Lightbox = dynamic(() => import("yet-another-react-lightbox"), {
  ssr: false,
});

const PAGE_SIZE = 9; // photos per page

export default function PhotographySection() {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState(0);
  const [page, setPage] = useState(0);

  const openLightbox = useCallback((index: number) => {
    setLightboxIndex(index);
    setLightboxOpen(true);
  }, []);

  const slides = photos.map((p) => ({ src: p.src, alt: p.alt }));
  const pageCount = Math.max(1, Math.ceil(photos.length / PAGE_SIZE));
  const start = page * PAGE_SIZE;
  const pagePhotos = photos.slice(start, start + PAGE_SIZE);

  return (
    <section
      id="frames"
      className="border-b py-[56px]"
      style={{ borderColor: "var(--rule)" }}
    >
      <SectionHead
        index="05"
        title="frames"
        meta={`contact sheet · ${photos.length} frames`}
      />

      {photos.length === 0 ? (
        <div
          className="border p-8 text-[12px]"
          style={{
            fontFamily: "var(--font-ibm-plex-mono)",
            color: "var(--dim)",
            borderColor: "var(--rule)",
            background: "var(--ink-2)",
          }}
        >
          {"// no frames yet. drop photos into "}
          <span style={{ color: "var(--accent)" }}>content/photography/</span>
          {" and run "}
          <span style={{ color: "var(--accent)" }}>scripts/build-photos.py</span>
          {"."}
        </div>
      ) : (
        <>
          <div className="collage">
            {pagePhotos.map((photo, i) => {
              const globalIndex = start + i;
              return (
                <button
                  key={photo.filename}
                  onClick={() => openLightbox(globalIndex)}
                  className="photo-frame block w-full border text-left"
                  style={{
                    borderColor: "var(--rule)",
                    background: "var(--ink-2)",
                    cursor: "pointer",
                    padding: 0,
                  }}
                  aria-label={`Open photo ${photo.exifId} (${photo.exifCaption}) in lightbox`}
                >
                  <Image
                    src={photo.src}
                    alt={photo.alt}
                    width={photo.width}
                    height={photo.height}
                    loading="lazy"
                    sizes="(max-width: 760px) 50vw, 33vw"
                    className="frame-img block h-auto w-full"
                  />
                  <div
                    className="flex justify-between gap-[10px] border-t px-[10px] py-2 text-[11px]"
                    style={{
                      fontFamily: "var(--font-ibm-plex-mono)",
                      color: "var(--mute)",
                      borderColor: "var(--rule)",
                    }}
                  >
                    <span style={{ color: "var(--accent)" }}>
                      {photo.exifId}
                    </span>
                    <span>{photo.exifCaption}</span>
                  </div>
                </button>
              );
            })}
          </div>

          {pageCount > 1 && (
            <div
              className="mt-[22px] flex items-center justify-between text-[13px]"
              style={{ fontFamily: "var(--font-ibm-plex-mono)" }}
            >
              <span style={{ color: "var(--dim)" }}>
                roll{" "}
                <span style={{ color: "var(--accent)" }}>
                  {String(page + 1).padStart(2, "0")}
                </span>{" "}
                / {String(pageCount).padStart(2, "0")}
              </span>
              <div className="flex gap-[14px]">
                <button
                  type="button"
                  className="file-btn"
                  onClick={() => setPage((p) => Math.max(0, p - 1))}
                  disabled={page === 0}
                  style={{
                    opacity: page === 0 ? 0.35 : 1,
                    cursor: page === 0 ? "default" : "pointer",
                  }}
                  aria-label="Previous page of photos"
                >
                  &larr; prev
                </button>
                <button
                  type="button"
                  className="file-btn"
                  onClick={() => setPage((p) => Math.min(pageCount - 1, p + 1))}
                  disabled={page === pageCount - 1}
                  style={{
                    opacity: page === pageCount - 1 ? 0.35 : 1,
                    cursor: page === pageCount - 1 ? "default" : "pointer",
                  }}
                  aria-label="Next page of photos"
                >
                  next &rarr;
                </button>
              </div>
            </div>
          )}

          {lightboxOpen && (
            <Lightbox
              open={lightboxOpen}
              close={() => setLightboxOpen(false)}
              index={lightboxIndex}
              slides={slides}
            />
          )}
        </>
      )}
    </section>
  );
}
