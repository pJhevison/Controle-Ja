import Image from 'next/image';

export default function Video() {
  return (
    <section id="video" className="w-full py-12 md:py-16">
      <div className="container px-4 md:px-6">
        <div className="mx-auto max-w-4xl">
          <div className="relative overflow-hidden rounded-lg shadow-lg" style={{ paddingTop: '56.25%' }}>
            <video 
              className="absolute top-0 left-0 w-full h-full object-cover"
              poster="https://placehold.co/1024x576.png"
              src="https://storage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4"
              autoPlay
              muted
              loop
              playsInline
            >
              Seu navegador não suporta o elemento de vídeo.
            </video>
          </div>
        </div>
      </div>
    </section>
  );
}
