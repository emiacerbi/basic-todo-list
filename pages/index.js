import { Button, Container, FormControl, Heading, Input, Stack } from '@chakra-ui/react'
import {useState} from 'react'
import TodoList from '../components/TodoList'

import data from '../utilities/data.json'

export default function Home() {

  const [todoList, setTodoList] = useState(data)  
  const [inputValue, setInputValue] = useState("")

  const toggleComplete = (id) => {
    return setTodoList(prevTodoList => prevTodoList.map(todo => todo.id === id ? { ...todo, complete: !todo.complete } : todo))
  }

  const removeComplete = () => {
    setTodoList(prevTodoList => prevTodoList.filter(todo => !todo.complete))
  }

  const handleChange = (e) => {
    setInputValue(e.target.value)
  }

  const handleSubmit = (e) => {

    e.preventDefault()

    const newTodo = {
      "id": new Date(),
      "task": inputValue,
      "complete": false
    }

    if(!inputValue) {
      alert('No empty strings please!')

    } else if (todoList.length > 8) {
      alert('Delete one todo before adding more!')

    } else {
      setTodoList(prevTodoList => [...prevTodoList, newTodo])
    }

    setInputValue('')
  }

  return (

    <Container 
      bg='#f1f4fd' 
      borderRadius='2rem'
      shadow='rgba(14, 30, 37, 0.12) 0px 2px 4px 0px, rgba(14, 30, 37, 0.32) 0px 2px 16px 0px;'
      height='75vh' 
      width='50vw'
      alignSelf='center'
      justifySelf='center'
      padding={10} 
      display='flex' 
      flexDirection='column' 
      gap={10}
      justifyContent='space-between'
      color='#131339'
    >
      <Stack spacing={5}>
        <Heading textAlign='center'>
          Todos!
        </Heading>

        <TodoList 
          todoList={todoList}
          toggleComplete={toggleComplete}
        />
      </Stack>

      <Stack>

        <form>
          <FormControl display='grid' gap={3} gridTemplateColumns='1fr 1fr' >

            <Input 
              type='text' 
              value={inputValue}
              onChange={handleChange}
              gridColumn= '1/3'
              color='#131339'
              fontWeight={500}
              colorScheme='blackAlpha.900'
              variant='outline'
              outline='1px solid #131339'
              placeholder='Buy groceries...'
              _hover={{outline: '2px solid #131339'}}
              _focus={{outline: '2px solid #131339'}}
            />

            <Button
              gridColumn= '1/2'
              type="submit"
              onClick={handleSubmit}
              variant='filled'
              colorScheme='red'
              color='whitesmoke'
              bg='#131339'
              _hover={{opacity: '.7'}}
              >
              Add task
            </Button>

            <Button
              gridColumn= '2/3'
              onClick={removeComplete}
              variant='outline'
              colorScheme='#131339'
              _hover={{bg: '#131339', color: 'whitesmoke'}}

            >
              Remove finished tasks
            </Button>

          </FormControl>

        </form>
      </Stack>
    </Container>
      
  )
}
