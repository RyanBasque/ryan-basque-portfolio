"use client";
import React, { useState } from "react";
import styled from "styled-components";

import Modal from "@/components/atoms/Modal";
import ModalWithFooter from "@/components/atoms/Modal/ModalWithFooter";
import Button from "@/components/atoms/Button";
import Text from "@/components/atoms/Text";
import Heading from "@/components/atoms/Heading";
import Input from "@/components/atoms/Input";
import { spacing, borderRadius } from "@/assets/styles";

const ExampleContainer = styled.div`
  min-height: 100vh;
  background: ${({ theme }) => theme.colors.background.primary};
  padding: ${spacing.xl};
  display: flex;
  flex-direction: column;
  gap: ${spacing.xl};
  align-items: center;
  justify-content: center;
`;

const ButtonGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: ${spacing.lg};
  max-width: 800px;
  width: 100%;
`;

const ModalContentExample = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${spacing.lg};
`;

const FormExample = styled.form`
  display: flex;
  flex-direction: column;
  gap: ${spacing.md};
`;

const InfoCard = styled.div`
  background: ${({ theme }) => theme.colors.background.secondary};
  border: 1px solid ${({ theme }) => theme.colors.border.primary};
  border-radius: ${borderRadius.lg};
  padding: ${spacing.lg};
`;

const ModalExamples = (): React.JSX.Element => {
  const [basicModalOpen, setBasicModalOpen] = useState(false);
  const [smallModalOpen, setSmallModalOpen] = useState(false);
  const [largeModalOpen, setLargeModalOpen] = useState(false);
  const [fullscreenModalOpen, setFullscreenModalOpen] = useState(false);
  const [formModalOpen, setFormModalOpen] = useState(false);
  const [confirmModalOpen, setConfirmModalOpen] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert(`Dados enviados:\n${JSON.stringify(formData, null, 2)}`);
    setFormModalOpen(false);
    setFormData({ name: "", email: "", message: "" });
  };

  const handleFormChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <ExampleContainer>
      <Heading level={1} color="primary" align="center">
        Modal Examples - Style Guide
      </Heading>

      <Text variant="subtitle" color="secondary" align="center">
        Exemplos de modais com suporte aos temas dark e light
      </Text>

      <ButtonGrid>
        <Button variant="primary" onClick={() => setBasicModalOpen(true)}>
          Modal Básico
        </Button>

        <Button variant="secondary" onClick={() => setSmallModalOpen(true)}>
          Modal Pequeno
        </Button>

        <Button variant="outline" onClick={() => setLargeModalOpen(true)}>
          Modal Grande
        </Button>

        <Button variant="primary" onClick={() => setFullscreenModalOpen(true)}>
          Modal Fullscreen
        </Button>

        <Button variant="secondary" onClick={() => setFormModalOpen(true)}>
          Modal com Formulário
        </Button>

        <Button variant="outline" onClick={() => setConfirmModalOpen(true)}>
          Modal de Confirmação
        </Button>
      </ButtonGrid>

      {/* Modal Básico */}
      <Modal
        isOpen={basicModalOpen}
        onClose={() => setBasicModalOpen(false)}
        title="Modal Básico"
        size="medium"
      >
        <ModalContentExample>
          <Text variant="body" color="primary">
            Este é um modal básico com tamanho médio. Ele demonstra o esquema de
            cores do tema atual e possui funcionalidades básicas como fechamento
            por ESC ou clique no backdrop.
          </Text>

          <InfoCard>
            <Text variant="caption" color="secondary">
              💡 Tip: Você pode fechar este modal pressionando ESC ou clicando
              fora dele.
            </Text>
          </InfoCard>
        </ModalContentExample>
      </Modal>

      {/* Modal Pequeno */}
      <Modal
        isOpen={smallModalOpen}
        onClose={() => setSmallModalOpen(false)}
        title="Modal Pequeno"
        size="small"
      >
        <Text variant="body" color="primary">
          Este é um modal pequeno, ideal para confirmações simples ou mensagens
          curtas.
        </Text>
      </Modal>

      {/* Modal Grande */}
      <Modal
        isOpen={largeModalOpen}
        onClose={() => setLargeModalOpen(false)}
        title="Modal Grande"
        size="large"
      >
        <ModalContentExample>
          <Text variant="body" color="primary">
            Este é um modal grande, perfeito para conteúdo mais extenso.
          </Text>

          <div>
            {[1, 2, 3, 4, 5].map((i) => (
              <InfoCard key={i} style={{ marginBottom: spacing.md }}>
                <Heading level={4} color="accent">
                  Seção {i}
                </Heading>
                <Text variant="body" color="secondary">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco.
                </Text>
              </InfoCard>
            ))}
          </div>
        </ModalContentExample>
      </Modal>

      {/* Modal Fullscreen */}
      <Modal
        isOpen={fullscreenModalOpen}
        onClose={() => setFullscreenModalOpen(false)}
        title="Modal Fullscreen"
        size="fullscreen"
      >
        <ModalContentExample>
          <Text variant="subtitle" color="primary">
            Este modal ocupa quase toda a tela, ideal para interfaces complexas
            ou visualização de conteúdo extenso.
          </Text>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
              gap: spacing.lg,
            }}
          >
            {[1, 2, 3, 4, 5, 6].map((i) => (
              <InfoCard key={i}>
                <Heading level={5} color="accent">
                  Card {i}
                </Heading>
                <Text variant="body" color="secondary">
                  Conteúdo do card {i} com informações relevantes.
                </Text>
              </InfoCard>
            ))}
          </div>
        </ModalContentExample>
      </Modal>

      {/* Modal com Formulário */}
      <ModalWithFooter
        isOpen={formModalOpen}
        onClose={() => setFormModalOpen(false)}
        title="Formulário de Contato"
        size="medium"
        footer={
          <>
            <Button variant="outline" onClick={() => setFormModalOpen(false)}>
              Cancelar
            </Button>
            <Button
              variant="primary"
              type="submit"
              onClick={() => {
                const form = document.querySelector("form");
                if (form) {
                  form.requestSubmit();
                }
              }}
            >
              Enviar
            </Button>
          </>
        }
      >
        <FormExample onSubmit={handleFormSubmit}>
          <Input
            label="Nome"
            name="name"
            value={formData.name}
            onChange={handleFormChange}
            placeholder="Seu nome completo"
            required
          />

          <Input
            label="E-mail"
            name="email"
            type="email"
            value={formData.email}
            onChange={handleFormChange}
            placeholder="seu@email.com"
            required
          />

          <Input
            label="Mensagem"
            name="message"
            value={formData.message}
            onChange={handleFormChange}
            placeholder="Sua mensagem..."
          />
        </FormExample>
      </ModalWithFooter>

      {/* Modal de Confirmação */}
      <ModalWithFooter
        isOpen={confirmModalOpen}
        onClose={() => setConfirmModalOpen(false)}
        title="Confirmar Ação"
        size="small"
        closeOnBackdropClick={false}
        footer={
          <>
            <Button
              variant="outline"
              onClick={() => setConfirmModalOpen(false)}
            >
              Cancelar
            </Button>
            <Button
              variant="primary"
              onClick={() => {
                alert("Ação confirmada!");
                setConfirmModalOpen(false);
              }}
            >
              Confirmar
            </Button>
          </>
        }
      >
        <Text variant="body" color="primary">
          Tem certeza de que deseja executar esta ação? Esta operação não pode
          ser desfeita.
        </Text>
      </ModalWithFooter>
    </ExampleContainer>
  );
};

export default ModalExamples;
