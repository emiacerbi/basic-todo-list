import { Icon, Stack, Text } from '@chakra-ui/react'

import { AiFillCheckSquare, AiOutlineBorder } from "react-icons/ai";


const TodoList = ({todoList, toggleComplete}) => {

  const todo = todoList.map(todo => {
    return (
      <Stack 
        direction='row'
        alignItems='center'
        justifyContent='space-between'
        key={todo.id}
        cursor='pointer'
        onClick={() => toggleComplete(todo.id)}
        _hover={{bg: '#13133979'}}
        paddingX={2.5}
        paddingY={1.5}
        transition='.1s background ease-in-out'
        width='100%'
      >
        <Text>
          - {todo.task}
        </Text>

        {todo.complete ? <Icon w={7} h={7} as={AiFillCheckSquare}/> : <Icon w={7} h={7} as={AiOutlineBorder} /> }
      </Stack>
    )
  })

  return (
    <Stack spacing={3} direction='column' alignItems='flex-start' justifyContent='center'>
      {todo}
    </Stack>
  ) 
}

export default TodoList