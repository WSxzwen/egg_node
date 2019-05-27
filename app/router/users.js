'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const { router, controller } = app;  
  // router.get('/', controller.home.index);
  const prefixRouter = router.namespace('/api/users')

  prefixRouter.post('/register', controller.users.register) 
  prefixRouter.post('/login', controller.users.login) 
  prefixRouter.get('/me', controller.users.me)
  prefixRouter.get('/', controller.users.findAll)
  prefixRouter.post('/', controller.users.create) 
  prefixRouter.get('/:id', controller.users.findOne)
  prefixRouter.delete('/:id', controller.users.delete)
  prefixRouter.put('/:id', controller.users.update)            
};