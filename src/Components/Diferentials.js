import { Title, Box, Container, ContainerInfos } from "../Css/global";
import eletronics from "../Assets/Electronics.svg";
import rocket from "../Assets/rocket.svg";
import medal from "../Assets/medal.svg";

const Diferentials = () => {
  return (
    <Container top={8} className="containerdiferentials">
      <ContainerInfos className="boxdiferentials">
        <Box className="boxdescription">
          <Box left={15}>
            <img src={eletronics} className="icondescription" />
          </Box>
          <Title top={5} size={20} bold>
            Processo de Desenvolvimento{" "}
          </Title>
          <Title width={55} top={5} opacity size={18}>
            Usamos a melhor estrutura para os nossos processos de
            densenvolvimento , sendo algumas delas : mobile frist e designer
            responsivo .{" "}
          </Title>
        </Box>

        <Box left={-15} className="boxdescription ">
          <Box left={15}>
            <img src={rocket} className="icondescription" />
          </Box>
          <Title size={20} top={5} bold>
            Melhores Tecnologias{" "}
          </Title>
          <Title width={90} top={5} opacity size={18}>
            {" "}
            Temos acesso as melhores tecnologia do mercado como o Reactjs e
            React Native.
          </Title>
        </Box>

        <Box right={-9} className="boxdescription medal">
          <Box left={25}>
            <img src={medal} className="icondescriptionMedal" />
          </Box>
          <Title size={20} top={5} bold>
            Maior velocidade{" "}
          </Title>
          <Title width={90} top={5} opacity size={18}>
            {" "}
            Trabalhamos de forma rápida e objetiva para entregar no menor tempo
            .{" "}
          </Title>
        </Box>
      </ContainerInfos>
    </Container>
  );
};

export default Diferentials;
