const SectionTitle = ({
  title,
  width = "570px",
  center,
  mb = "20px",
}: {
  title: string;
  paragraph: string;
  width?: string;
  center?: boolean;
  mb?: string;
}) => {
  return (
    <>
      <div
        className={`wow fadeInUp w-full ${center ? "mx-auto text-center" : ""}`}
        data-wow-delay=".1s"
        style={{ maxWidth: width, marginBottom: mb }}
      >
        <h2 className="mb-4 text-2xl font-bold !leading-tight text-black dark:text-white sm:text-3xl md:text-4xl">
          {title}
        </h2>
      </div>
    </>
  );
};

export default SectionTitle;
