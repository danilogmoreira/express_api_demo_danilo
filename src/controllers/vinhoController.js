const vinho = require('../models/vinho')

module.exports = {
  create: (req, res, next) => {
    let vinho = new vinho(req.body)

    vinho.save()
      .then(saved => res.json(saved))
      .catch(e => next(e))
    
  },

  find: (req, res, next) => {
    vinho.findById(req.params.id)
      .then(user => res.json(user))
      .catch(e => next(e))
  },

  findAll: (req, res) => {
    vinho.find()
      .then(users => res.json(users))
      .catch(e => next(e))
  },

  update: (req, res, next) => {
    vinho.findById(req.params.id)
      .then( found => {
        found.set(req.body)
        found.save()
          .then(saved => res.json(saved))
          .catch(e => next(e))
      })
      .catch(e => next(e))
  },

  delete: (req, res) => {
    vinho.findByIdAndRemove(req.params.id)
      .then(deleted => {
        res.json({
          message: 'vinho deleted',
          id: deleted._id
        })
      })
      .catch(e => next(e))
  }
}