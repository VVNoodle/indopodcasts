import { podcasts } from './podcasts'

describe('podcasts', () => {
  scenario('returns all podcasts', async (scenario) => {
    const result = await podcasts()

    expect(result.length).toEqual(Object.keys(scenario.podcast).length)
  })
})
