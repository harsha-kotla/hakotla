export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <main className="mx-auto max-w-3xl px-6 py-16 sm:px-8 sm:py-24">
        <div className="space-y-6">
          <h1 className="text-4xl font-bold text-black sm:text-5xl">
            Harsha Kotla
          </h1>
         
          <p className="text-lg text-black">
            I'm a senior at Bellarmine College Prep, and I'm interested in the intersection of artificial intelligence and other fields.
          </p>
          <p className="text-lg text-black">
            I'm currently fine-tuning NLP LLMs related to finance and working on skin cancer interpretability 
            research to develop tools and methods to make AI models more transparent and understandable 
            in medical imaging applications.

          </p>
          <p className="text-lg text-black">
            I'm also building <a
              href="wordmate.app"
              target="_blank"
              rel="noopener noreferrer"
              className="underline text-[#8B4513] hover:text-[#654321]"
            >WordMate</a>, to help people learn new words and improve their vocabulary more efficiently with AI.
          </p>
          <p className="text-lg text-black">
            Connect with me on{" "}
            <a
              href="https://x.com/harshak628"
              target="_blank"
              rel="noopener noreferrer"
              className="underline text-[#8B4513] hover:text-[#654321]"
            >
              twitter
            </a>
            {", "}
            <a
              href="https://www.linkedin.com/in/harsha-kotla-993657264/"
              target="_blank"
              rel="noopener noreferrer"
              className="underline text-[#8B4513] hover:text-[#654321]"
            >
              linkedin
            </a>
            {", or "}
            <a
              href="https://github.com/harsha-kotla"
              className="underline text-[#8B4513] hover:text-[#654321]"
            >
              github
            </a>
            {"!"}
          </p>
        </div>
      </main>
    </div>
  );
}
