import { Section } from '../components/Section'
import { ExperienceTimeline } from '../components/ExperienceTimeline'

export function Experience() {
  return (
    <Section
      id="experience"
      title="Experience"
      subtitle="Where I've built and shipped ML systems."
    >
      <ExperienceTimeline />
    </Section>
  )
}
