import {Router} from 'express';
import {Todo} from '../models/todo'

type reqbody = {text:string}
type reqparam = {todoId:string}

let todos: Todo[] = [];

const router = Router();

router.get('/', (req, res, next)=>{
  res.status(200).json({todos: todos})  
})

router.post('/todo', (req,res,next)=>{
  const body = req.body as reqbody;
  const newTodo: Todo ={
    id: new Date().toISOString(),
    text: body.text
  };

  todos.push(newTodo);
  res.status(201).json({message: 'Added todo', todo: newTodo, todos:todos})
});

router.put('/todo/:todoId', (req, res, next)=>{
  const params = req.params as reqparam;
  const tid = params.todoId;
  const body = req.body as reqbody;

  const todoIndex = todos.findIndex( t => t.id ===tid)
  if(todoIndex >=0){
    todos[todoIndex] = {id: todos[todoIndex].id, text: body.text};
    return res.status(200).json({message: 'Updated todo', todos: todos})
  }
  res.status(404).json({message: 'Could not fine todo for this id.'})
})

router.delete('/todo/:todoId', (req, res, next)=>{
  const params = req.params as reqparam;
  const tid = params.todoId;
  todos = todos.filter(t=>t.id!==tid)
  res.status(200).json({message: 'Todo deleted', todos: todos})
})

export default router;