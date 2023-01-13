type Props = {
    allFilters: string[];
    filters: string[];
    add: (filters: string) => void;
    remove: (filter: string) => void;
}

function Filters({ allFilters, filters, add, remove }: Props) {
  
    const changeFilter = (filter: string) => {
        if (filters.includes(filter)) {
            remove(filter);
        } else {
            add(filter);
        }
    }

  return (
    <div className="text-slate-800 dark:text-slate-50 transition-all duration-300">
        <h2 className="text-xl md:text-2xl font-bold mb-4 text-slate-800 dark:text-slate-50 transition-all">Catégories: </h2>
        <div className="flex flex-wrap mb-4">
            {allFilters.map((filter) => (
                <button
                    key={filter}
                    className={filters.includes(filter) ? 'bg-yellow-200 text-xs md:text-sm font-bold px-3 py-1 rounded-lg mr-2 mb-2 shadow-sm' : 'bg-slate-50 text-slate-800 transition-all text-xs md:text-sm font-bold px-3 py-1 rounded-lg mr-2 mb-2 shadow-sm'}
                    onClick={() => changeFilter(filter)}
                >
                    {filter}
                </button>
            ))}
        </div>
    </div>
  )
}

export default Filters