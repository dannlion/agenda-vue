const model = require("../models/index");
const { Op } = require("sequelize");
const controller = {};

// Pegar todos os dados na tabela:
controller.getAll = async function (req, res) {
  try {
    const userData = await model.user.findAll();

    if (userData.length > 0) {
      res
        .status(200)
        .json({ message: "Connection successful", data: userData });
    } else {
      res.status(200).json({ message: "Connection failed", data: [] });
    }
  } catch (error) {
    res.status(404).json({ message: error });
  }
};

// Pega os dados de determinado usuário pelo ID:
controller.getUserdata = async function (req, res) {
  try {
    var userData = await model.user.findByPk(req.params.id);
    res.status(200).json({ message: "Connection successful", data: userData });
  } catch (error) {
    res.status(404).json({ message: error });
  }
};

// Criar um novo usuário na tabela:
controller.createNew = async function (req, res) {
  try {
    //   check data has already been created
    const checkData = await model.user.findAll({
      where: {
        [Op.or]: {
          Nome: req.body.Nome,
        },
      },
    });
    if (checkData.length > 0) {
      res.status(500).json({ message: "Este usuário já existe!" });
    } else {
      await model.user
        .create({
          Nome: req.body.Nome,
          Endereco: req.body.Endereco,
          Celular: req.body.Celular,
          Email: req.body.Email,
          Obs: req.body.Obs,
        })
        .then((result) => {
          res.status(201).json({
            message: "Usuário criado com sucesso!",
            data: {
              Nome: req.body.Nome,
              Endereco: req.body.Endereco,
              Celular: req.body.Celular,
              Email: req.body.Email,
              Obs: req.body.Obs,
            },
          });
        });
    }
  } catch (error) {
    res.status(404).json({ message: error });
  }
};

// Editar os dados de um usuário:
controller.editAt = async function (req, res) {
  try {
    await model.user
      .findAll({ where: { id: req.params.id } })
      .then(async (result) => {
        if (result.length > 0) {
          await model.user.update(
            {
              Nome: req.body.Nome,
              Endereco: req.body.Endereco,
              Celular: req.body.Celular,
              Email: req.body.Email,
              Obs: req.body.Obs,
            },
            { where: { id: req.params.id } }
          );
          res.status(200).json({ message: "Dados atualizados com sucesso!" });
        } else {
          res.status(500).json({ message: "Falha na atualização." });
        }
      });
  } catch (error) {
    res.status(404).json({ message: error });
  }
};

// Deletar um usuário:
controller.deleteUser = async function (req, res) {
  try {
    await model.user
      .findAll({ where: { id: req.params.id } })
      .then(async (result) => {
        if (result.length > 0) {
          await model.user.destroy({ where: { id: req.params.id } });
          res.status(200).json({ message: "Usuário excluído com sucesso!" });
        } else {
          res.status(404).json({ message: "Usuário não encontrado." });
        }
      });
  } catch (error) {
    res.status(404).json({ message: error });
  }
};

module.exports = controller;
