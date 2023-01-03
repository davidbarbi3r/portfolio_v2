type Props = {
    filters: string[];
    setUseFilter: (filters: string[]) => void;
}

function Filters({ filters, setUseFilter }: Props) {
  

  return (
    <div>
        <div className="flex flex-wrap justify-center mb-4">
            {filters.map((filter) => (
                <button
                    key={filter}
                    className="bg-slate-50 text-slate-500 text-xs md:text-sm font-bold px-3 py-1 rounded-lg mr-2 mb-2 shadow-sm"
                    onClick={() => {
                        setUseFilter([filter]);
                        console.log(filter);
                    }}
                >
                    {filter}
                </button>
            ))}
        </div>
    </div>
  )
}

export default Filters