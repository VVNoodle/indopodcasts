import { topPodcasts } from './topPodcasts'

describe('topPodcasts', () => {
  scenario('returns all topPodcasts', async (scenario) => {
    const result = await topPodcasts()

    expect(result.length).toEqual(Object.keys(scenario.topPodcast).length)
  })
})
