const Withdraw = () => {
  return (
    <div className="flex justify-center flex-col gap-6 items-center">
      <h1 className="text-xl font-semibold">Amount to Withdraw</h1>
      <input
        type="text"
        placeholder="Enter amount to Withdraw..."
        className="input input-bordered input-secondary w-full max-w-lg"
      />
      <button className="btn btn-secondary btn-wide">Withdraw</button>
    </div>
  );
};

export default Withdraw;
