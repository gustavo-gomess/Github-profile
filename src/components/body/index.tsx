import { Container } from "./style";

export function Body() {
  return (
    <Container>
      <div>
        <form>
          <input type="text" name="Github Username" />
          <button>Search</button>
        </form>
      </div>
    </Container>
  );
}
