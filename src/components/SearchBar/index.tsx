import { SearchBarContainer, SearchFormContainer } from "./styles";

export function SearchBar() {
    return (
        <SearchBarContainer>
            <SearchFormContainer type="text" placeholder="Encontre seu próximo curso por habilidade, tema ou instrutor" list="search-suggestions" />
            
            <datalist id="search-suggestions">
                <option value="angular" />
                <option value="databricks" />
                <option value="power aps" />
                <option value="curso de python" />
                <option value="trafego pago" />
                <option value="kubernates" />
            </datalist>
        </SearchBarContainer>
    )
}