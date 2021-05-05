import React, { useState } from 'react';
import { Button, Form } from 'react-bootstrap';

const SearchBox = ({ history }) => {
    const [keyword, setKeyword] = useState('');

    const submitHandler = e => {
        e.preventDefault();
        //Die trim() Methode gibt eine Zeichenfolge ohne Leerzeichen an beiden Enden zurück.
        if (keyword.trim()) {
            history.push(`/search/${keyword}`);
        } else {
            history.push('/');
        }
    };
    return (
        <div>
            <Form onSubmit={submitHandler} inline>
                <Form.Control
                    typw="text"
                    name="q"
                    onChange={e => setKeyword(e.target.value)}
                    placeholder="Search Products..."
                    className="mr-sm-1 ml-sm-4"
                ></Form.Control>
                <Button type="submit" variant="outline-success" className="p-2">
                    Search
                </Button>
            </Form>
        </div>
    );
};

export default SearchBox;
