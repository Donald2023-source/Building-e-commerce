const Subscribe = () => {
  return (
    <div className="lg:flex hidden items-center justify-center gap-10 w-[80%] my-5 rounded-lg p-9 bg-black mx-auto">
      <div className="flex flex-col gap-1 text-white">
        <h2>SUBSCRIBE TO GET UPDATED</h2>
        <p className="text-sm">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod
          architecto totam iste dolore aut impedit?
        </p>
      </div>

      <input
        className="border bg-black text-white p-2 rounded-lg"
        type="text"
        placeholder="Enter Your Email"
      />

      <button className="bg-white text-black border lg:text-md text-sm p-3 rounded-lg">
        Subscribe Now
      </button>
    </div>
  );
};

export default Subscribe;
