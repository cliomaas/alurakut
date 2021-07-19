import styled from 'styled-components'
import { MainGrid } from '../src/components/MainGrid'
import { Box } from '../src/components/Box'
import { AlurakutMenu, OrkutNostalgicIconSet } from '../src/lib/AlurakutCommons'
import { ProfileRelationsBoxWrapper } from '../src/components/ProfileRelations'

function ProfileSidebar(props) {
  console.log(props)
  return (
    <Box >
      <img src={`https://github.com/${props.gitHubUser}.png`} style={{ borderRadius: '50%' }} />
    </Box>)
}

export default function Home() {
  const usuarioAleatorio = 'google';
  const pessoasFavoritas = ['peas', 'juunegreiros', 'omariosouto', 'rafaballerini', 'marcobrunodev', 'felipefialho']
  return (
    <>
      <AlurakutMenu />
      <MainGrid>
        <div className="profileArea" style={{ gridArea: 'profileArea' }} >
          <ProfileSidebar gitHubUser={usuarioAleatorio} />
        </div>
        <div className="welcomeArea" style={{ gridArea: 'welcomeArea' }} >
          <Box>
            <h1 className="title">
              Bem vinde, {usuarioAleatorio}
            </h1>
            <OrkutNostalgicIconSet />
          </Box>
        </div>
        <div className="profileRelationsArea" style={{ gridArea: 'profileRelationsArea' }} >
          <ProfileRelationsBoxWrapper>
            <h2 className="smallTitle">
              Pessoas que admiro ({pessoasFavoritas.length})</h2>
            <ul>
              {pessoasFavoritas.map((itemAtual) => {
                return (
                  <li>
                    <a href={`/users/${itemAtual}`} key={itemAtual}>
                      <img src={[`https://github.com/${itemAtual}.png`]} />
                      <span>{itemAtual}</span>
                    </a>
                  </li>
                )
              })}</ul>
          </ProfileRelationsBoxWrapper>
          <Box>
            Comunidades

          </Box>
        </div>
      </MainGrid>
    </>

  )
}
