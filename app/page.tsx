import Digest from "./digest";
import { latestEdition } from "./briefing-data";
export default function Home() { return <Digest edition={latestEdition} />; }
