import concepts from "./ConceptsData";
import Concept from "./Concept";

function Concepts(props) {
  return (
    <ul id="concepts">
      <Concept
        image={concepts[0].image}
        title={concepts[0].title}
        description={concepts[0].description}
      />
      <Concept
        image={concepts[1].image}
        title={concepts[1].title}
        description={concepts[1].description}
      />
      <Concept
        image={concepts[2].image}
        title={concepts[2].title}
        description={concepts[2].description}
      />
    </ul>
  );
}

export default Concepts;
