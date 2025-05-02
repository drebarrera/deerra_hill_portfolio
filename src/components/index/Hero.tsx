export default function Hero({ title, subtitle, description }: { title: string, subtitle: string, description: string }) {
  return (
    <section
      className="w-[100vw] h-[100vh] flex justify-center items-center"
      style={{
        background:
          "linear-gradient(to bottom, #EED7FA33 0%, #EED7FA33 40%, #EED7FA33 70%, #1E001E 100%, #EED7FA 130%, #EED7FA 230%), var(--unicorn)",
      }}
    >
      <div className="max-w-[1500px] flex flex-row justify-between">
        <div className="w-fit flex flex-col gap-[15px]">
          <div className="w-fit flex flex-row gap-[20px] items-end">
            <h1 className="text-4xl md:text-5xl font-semibold">{title}</h1>
            <em className="text-xl md:text-2xl font-semibold">
              {subtitle}
            </em>
          </div>
          <p className="w-[450px] text-xl md:text-2xl font-medium">
            {description}
          </p>
        </div>
      </div>
    </section>
  );
}
