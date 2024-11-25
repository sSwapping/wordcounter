const Stats = ({ stats, isNitro, toggleNitro }) => {
  return (
    <section className='bg-gray-100'>
      <div className='grid grid-cols-2 md:grid-cols-4'>
        <Stat label='Words' number={stats.numberOfWords} />
        <Stat label='Characters' number={stats.numberOfCharacters} />
        <Stat label='Instagram' number={stats.instagramCharacters} />
        <Stat
          label={`Discord ${isNitro ? "Nitro" : ""}`}
          number={stats.discordCharacters}
          subLabel={`/${stats.discordLimit}`}
        />
      </div>
      <div className='p-4 text-center'>
        <label
          htmlFor='nitro-toggle'
          className='inline-flex items-center cursor-pointer'
        >
          <span className='mr-3 text-sm font-medium text-gray-900'>
            Discord
          </span>
          <div className='relative'>
            <input
              type='checkbox'
              id='nitro-toggle'
              className='sr-only peer'
              checked={isNitro}
              onChange={toggleNitro}
            />
            <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-purple-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-purple-600"></div>
          </div>
          <span className='ml-3 text-sm font-medium text-gray-900'>
            Discord Nitro
          </span>
        </label>
      </div>
    </section>
  );
};

const Stat = ({ number, label, subLabel }) => {
  return (
    <div className='p-4 text-center border-b border-r border-gray-200 last:border-r-0'>
      <span
        className={`text-2xl font-semibold ${
          number < 0 ? "text-red-500" : "text-gray-700"
        }`}
      >
        {number}
      </span>
      {subLabel && <span className='text-sm text-gray-500'>{subLabel}</span>}
      <h2 className='mt-1 text-xs tracking-wide text-gray-500 uppercase truncate sm:text-sm'>
        {label}
      </h2>
    </div>
  );
};

export default Stats;
