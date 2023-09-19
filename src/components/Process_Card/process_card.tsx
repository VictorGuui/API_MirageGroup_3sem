import './process_card_style.scss'
import vetor from '../../assets/Vector.png';
import { useState } from 'react';

export function Process_card() {
  const contributorOptions = ["Gustavo", "Pedro", "Hugo", "Vinicius", "Victor", "Jaqueline", "Hugo", "Gustavo Henrique", "Thiago"];

  const handleCreateProject = () => {
    // Pegue os valores dos inputs quando o botão for pressionado
    const projetoNome = document.getElementById("input_nome").value;
    const responsavel = document.getElementById("responsavel").value;
    const selectedContributor = document.getElementById("contribuidores").value;
    const descricao = document.getElementById("Descrição").value;
    
    // Crie um objeto JSON com os valores dos inputs
    const projectData = {
        name: projetoNome,
        responsible: responsavel,
        description: descricao,
        contribuitor: selectedContributor,
    };

    console.log(projectData)

    // // Exemplo de envio com fetch:
    // fetch('URL_DO_BACKEND', {
    //   method: 'POST',
    //   headers: {
    //     'Content-Type': 'application/json',
    //   },
    //   body: JSON.stringify(projectData),
    // })
    //   .then(response => response.json())
    //   .then(data => {
    //     // Manipule a resposta do backend, se necessário
    //     console.log(data);
    //   })
    //   .catch(error => {
    //     // Lide com erros de requisição, se houverem
    //     console.error(error);
    //   });
  };

  return (
    <div className="card_wrapper">
      <div className="title_div">
        <h1>Novo Projeto</h1>
        <button className="button_create" onClick={handleCreateProject}>
          Criar Projeto
        </button>
      </div>

      <div className='input_line'>
        <div className="input_wrapper">
          <label htmlFor="input_nome">Nome do Projeto</label>
          <input id="input_nome"></input>
        </div>

        <div className="input_wrapper">
          <label htmlFor="responsavel">Responsável</label>
          <input id="responsavel"></input>
        </div>
      </div>

      <div className='lower_card_container'>
        <div className='description_wrapper'>
          <label htmlFor="contribuidores">Contribuidores</label>
          <select
            className='dropdown_wrapper'
            id="contribuidores"
          >
            <option value=""></option>
            {contributorOptions.map((contributor, index) => (
              <option key={index} value={contributor}>
                {contributor}
              </option>
            ))}
          </select>

          <div className="input_wrapper">
            <label htmlFor="contribuidores">Descrição</label>
            <input
              id="Descrição"
            ></input>
          </div>
        </div>

        <div className='icons_container'>
          <div className='icons_line'>
            <img src={vetor}></img>
            <img src={vetor}></img>
            <img src={vetor}></img>
            <img src={vetor}></img>
            <img src={vetor}></img>
          </div>

          <div className='procedimentos'>
            procedimentos
          </div>
        </div>
      </div>
    </div>
  );
}