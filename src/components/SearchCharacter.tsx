import "../styles/SearchCharacter.scss";
import { useState, ChangeEvent, FormEvent } from 'react';
import { SearchCharacterProps } from '../interface/SearchCharacterProps';

const SearchCharacter = ({ setSearchTerm }: SearchCharacterProps): JSX.Element => {
    const [ inputValue, setInputValue ] = useState<string>('')

    const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
        setInputValue(event.target.value)
    }

    const handleSubmit = ( event: FormEvent<HTMLFormElement> ) => {
        event.preventDefault()
        setSearchTerm(inputValue)
    }

    return (
        <form onSubmit={handleSubmit} className="search-character-form">
            <input
                type="text"
                value={inputValue}
                onChange={handleInputChange}
                placeholder="Search character..."
            />
            <input type="submit" className="input-submit" value="Send"/>
        </form>
    )
}

export default SearchCharacter;
