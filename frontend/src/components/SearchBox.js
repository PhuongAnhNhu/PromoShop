import React, { useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import { useHistory } from 'react-router-dom';

const SearchBox = () => {
  const [keyword, setKeyword] = useState('');

  let history = useHistory();

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
      <Form className='' onSubmit={submitHandler} inline>
        <Form.Control
          typw="text"
          name="q"
          onChange={e => setKeyword(e.target.value)}
          placeholder="Search Products..."
          className="mr-sm-1"
        ></Form.Control>
        <Button type="submit" variant="outline-dark" className="p-2">
          Search
        </Button>
      </Form>
    </div>
  );
};

export default SearchBox;
