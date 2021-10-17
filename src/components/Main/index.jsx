/* eslint-disable react/jsx-pascal-case */
import React, { useState } from 'react'
import data from '../../data.json'
import { Title, Main__container, Main__text, Input__container, Input__large, Input__medium, Input__small, Jobs__container, Future__job, Initiated__job, Next__job, Job__circles__box, AgendaItem, Agenda__container } from './styles'
import schedule from '../../assets/calendar 1.png'


const Main = () => {
  const [agenda, setAgenda] = useState({
    date: '',
    hour: '',
    minutes: '',
    isClicked: false
  })
  
  const handleChange = e => {
    setAgenda({
      ...agenda,
      [e.target.name]: e.target.value,
    })
  }

  let endJob = `${Number(agenda.hour) + 1}:${agenda.minutes}`;


  const isJobs = () => {
    if (agenda.hour === '' || agenda.minutes === '' || agenda.date === '') {
      return (
        <AgendaItem>Nenhum job marcado</AgendaItem>
      )
    } else{
      return (
        <AgendaItem>{agenda.date} das {agenda.hour}:{agenda.minutes} até {endJob}</AgendaItem>
      )
    }
  }
  
  const jobStatus = () => {
    let now = new Date()
    if (agenda.hour > (now.getUTCHours()) && agenda.date > now.getDate()) {
      return (
        <Initiated__job />
      )
     
    }else if (agenda.date < now.getDate() + 1){
      return (
        <Next__job />
      )
    }
 }



  return (
    <Main__container>
      <Title>Bem vindo(a), {data.first_name}</Title>
      <Main__text>Adicione seus jobs a agenda e gerencie sua rotina</Main__text>
      <Input__container>
        <Input__large
          name="date"  
          placeholder="Selecione uma data..."
          type="text"
          onChangeCapture={handleChange}
        />
        <Input__small
          name="hour"  
          placeholder="Hora"
          type="text"
          onChangeCapture={handleChange}
        />
        <Input__small
          name="minutes"
          placeholder="Minuto"
          type="text"
          onChangeCapture={handleChange}
        />
        <Input__medium
          name="isClicked"
        >
          <img src={schedule} alt="icon of a calendar" />  <span>|</span> Agendar
        </Input__medium>
      </Input__container>
      <Jobs__container>
        <Job__circles__box>

          <Future__job />
          <Initiated__job />
          <Next__job />
        </Job__circles__box>
        <Agenda__container>
          <AgendaItem>
            {jobStatus()} {" "} {isJobs()}
          </AgendaItem>

        </Agenda__container>
      </Jobs__container>
      
    </Main__container>
  )
}

export default Main
