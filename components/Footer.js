const Footer = () => {
  return (
    <section className="bg-[#0B24FB] text-white">
      <div className="max-w-5xl m-auto p-5">
        <div className="flex justify-between items-center">
          <p className="md:text-base text-xs">
            <span className="font-bold">wknd@</span>2020
          </p>
          <div className="border border-white rounded-[12px] px-3 py-1">
            <p className="font-light md:text-sm text-[10px]">alpha version 0.1</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Footer;
