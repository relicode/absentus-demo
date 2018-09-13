import Plot from '../utils/plot'


const PLOT_WITH_TASKS_FILTER = 'PLOT_WITH_TASKS'

export const plotsSelector = (state) => {
  const { country, city, cemetery } = state.chosenCemetery
  const { map, mapFilter } = state
  const { nameFilter, tagFilters } = mapFilter

  const plots = map.zoom <= 18 ? [] : Object.entries(state.cemeteries[country][city][cemetery]).map((block) => (
    Object.entries(block[1].plots).map((plot) => (
      new Plot({
        ...plot[1],
        plotNr: plot[0],
        block: block[0],
      })
    ))
  )).reduce((prev, curr) => (
    prev.concat(curr) // Flatten array
  ))

  const plotsAfterNameFiltering = nameFilter.length ? (
    plots.filter((p) => (
      p.residents.filter((r) => (
        new RegExp(nameFilter, 'i', 'g').test(r)
      )).length
    ))
  ) : plots

  const plotsAfterTaskFiltering = tagFilters.includes(PLOT_WITH_TASKS_FILTER) ? (
    Object.entries(plotsAfterNameFiltering).map((plot) => (
      plot[1].tasks.length ? plot[1] : null
    )).filter(n => n) // Remove falsy (in this case, null) entries
  ) : plotsAfterNameFiltering

  return plotsAfterTaskFiltering
}

