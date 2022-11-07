import Painting from './components/Painting';
import {data} from './index';

export default function App() {
  return (
    <div>
      <Painting
        imageUrl={data.url}
        title={data.title}
        author={data.author.tag}
        profileUrl={data.author.url}
        price={data.price}
      />
    </div>
  );
}
