var express = require('express');
var router = express.Router();
var mongojs = require('mongojs');
var db = mongojs('mongodb://thang:thang@ds157325.mlab.com:57325/mytodolist_thang', ['todos'])

// Get all todos
router.get('/todos', function(req, res, next){
    // res.send('Todos');
    db.todos.find(function(err, todos){
        if(err){
            res.send(err);
        }
        res.json(todos)
    });
});
// Get single todo
router.get('/todo/:id', function(req, res, next){
    // res.send('Todos');
    db.todos.findOne({_id: mongojs.ObjectId(req.params.id)},function(err, todo){
        if(err){
            res.send(err);
        }
        res.json(todo)
    });
});

// Delete todo
router.delete('/todo/:id', function(req, res, next){
    // res.send('Todos');
    db.todos.remove({_id: mongojs.ObjectId(req.params.id)},function(err, todo){
        if(err){
            res.send(err);
        }
        res.json(todo)
    });
});

// Update todo
router.put('/todo/:id', function(req, res, next){
    // res.send('Todos');
    var todo = req.body;
    var updTodo = {};
    if(todo.status){
        updTodo.status = todo.status;
    }
    if(todo.title){
        updTodo.title = todo.title;
    }
    if(!updTodo){
        res.status(400);
        res.json({
            "error":"Bad data"
        });
    }else{
        db.todos.update({_id: mongojs.ObjectId(req.params.id)},updTodo,{},function(err, todo){
            if(err){
                res.send(err);
            }
            res.json(todo)
        });
    }    
});

// Save Todo
router.post('/todo', function(req, res, next){
    var todo = req.body;
    if(!todo.title || !(todo.status + '')){
        res.status(400);
        res.json({
            "error": "Bad Data"
        });
    } else {
        db.todos.save(todo, function(err, todo){
            if(err){
                res.send(err);
            }
            res.json(todo);
        });
    }
});


module.exports = router;
// var express = require('express');
// var router = express.Router();

// router.get('/', function(req, res, next){
//     res.send('INDEX');
// });

// module.exports = router;