import * as S from "./PaymentConfirmation.styles";
import { FC, useEffect } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import {
  AiOutlineCheckCircle,
  AiOutlineCloseCircle,
  AiOutlineHome
} from "react-icons/ai";
import Button from "../../components/Button/Button";
import { useDispatch } from "react-redux";
import { clearCart } from "../../store/cart/cart.actions";

const PaymentConfirmation: FC = () => {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const status = searchParams.get("success");
  const isCanceled = searchParams.get("canceled") === "true";

  useEffect(() => {
    setTimeout(() => {
      if (status === "true") {
        dispatch(clearCart());
      }
    }, 0);
  }, [status]);

  const goToHome = () => navigate("/");

  return (
    <S.Container>
      <S.Content>
        {status === "true" && (
          <>
            <AiOutlineCheckCircle size={120} color="#198754" />
            <p>Sua compra foi finalizada com sucesso!</p>
          </>
        )}

        {(status === "false" || isCanceled) && (
          <>
            <AiOutlineCloseCircle size={120} color="#FF6A6A" />
            <p>
              Ocorreu um erro ao finalizar sua compra. Por favor, tente
              novamente.
            </p>
          </>
        )}

        <Button icon={<AiOutlineHome size={23} />} onClick={goToHome}>
          Ir para a Página Inicial
        </Button>
      </S.Content>
    </S.Container>
  );
};

export default PaymentConfirmation;
