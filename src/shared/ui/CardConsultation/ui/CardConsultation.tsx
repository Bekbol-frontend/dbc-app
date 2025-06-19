import { memo, useCallback, useState } from "react";
import { Card } from "../../Card";
import { Flex } from "../../Flex";
import { Title } from "../../Title";
import { Desc } from "../../Desc";
import { Button } from "../../Button";
import styles from "./CardConsultation.module.scss";
import { Modal } from "../../Modal";
import { LeaveForm } from "@/features/LeaveForm";
import { clsx } from "@/shared/lib/clsx";

interface IProps {
  title: string;
  desc: string;
  btnText: string;
  addClass?: string;
}

function CardConsultation(props: IProps) {
  const { title, desc, btnText, addClass = "" } = props;

  const [modal, setModal] = useState(false);

  const openModal = useCallback(() => setModal(true), []);
  const closeModal = useCallback(() => setModal(false), []);

  return (
    <>
      <Card addClass={clsx([styles.bottomCard, addClass])}>
        <Flex flexDirection="column" gap={20} align="center" justify="center">
          <Title level={2}>{title}</Title>
          <Desc>{desc}</Desc>
          <Button type_btn="primary" onClick={openModal}>
            {btnText}
          </Button>
        </Flex>
      </Card>

      <Modal title="Оставить заявку" open={modal} onClose={closeModal} lazy>
        <LeaveForm />
      </Modal>
    </>
  );
}

export default memo(CardConsultation);
