import PaintingList from 'components/Painting/PaintingList';
import Section from './components/Section';
import { painting } from './index';

export default function App() {
  return (
    <div>
      <Section title="Топ недели">
        <PaintingList items={painting} />
      </Section>
    </div>
  );
}
