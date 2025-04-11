import { RevealOnScroll } from "../RevealOnScroll";

export const PitchVideo = () => {
    const ElevatorPitchVideo = [
    ];

    return (
        <section
          id="pitchvideo"
          className="min-h-screen flex items-center justify-center py-20"
        >
            <RevealOnScroll>
                <div className="max-w-3xl mx-auto px-4">
                    <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent text-center">
                        {" "}
                        Pitch-Video
                    </h2>
                        <iframe width="560" height="315" src="https://www.youtube.com/embed/xxdYpwznP10?si=AkzaAcx51w0bWYCX" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
                </div>
            </RevealOnScroll>
        </section>
    );
};

