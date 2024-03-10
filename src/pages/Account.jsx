import UpdatePasswordForm from "../features/authentication/UpdatePasswordForm";
import UpdateUserDataForm from "../features/authentication/UpdateUserDataForm";
import Heading from "../ui/Heading";
import Row from "../ui/Row";

function Account() {
  return (
    <>
      <Heading as="h1">Modifer vos infos</Heading>

      <Row>
        <Heading as="h3">Mise a jour de vos données</Heading>
        <UpdateUserDataForm />
      </Row>

      <Row>
        <Heading as="h3">Modifier mots de passe</Heading>
        <UpdatePasswordForm />
      </Row>
    </>
  );
}

export default Account;
