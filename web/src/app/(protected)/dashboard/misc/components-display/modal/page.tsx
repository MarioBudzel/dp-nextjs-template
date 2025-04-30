"use client";
import BasicModal, {
  ModalTitle,
  ModalClose,
} from "@/components/common/BasicModal";
import CodeBlock from "@/components/common/CodeBlock";
import Flex from "@/components/common/Flex";
import { X, Menu, Settings, Star, Bell } from "lucide-react";
import { useRef } from "react";
import PropsWrapper from "../../components/PropsWrapper";
import { basicModalProps } from "../../data/componentProps";
import DocsFooter from "../../components/DocsFooter";

const BasicModals: React.FC = () => {
  const modalRef = useRef<{ onOpen: () => void; onClose: () => void } | null>(
    null
  );

  return (
    <Flex className="p-5 flex-col items-center">
      <Flex className="max-w-screen-md w-[100%] gap-16 flex-col">
        <div>
          <p className="text-xl text-primary font-bold mb-2">Import</p>
          <CodeBlock
            language="tsx"
            rounded
          >{`import BasicModal, { ModalTitle, ModalClose } from "@/components/common/BasicModal";`}</CodeBlock>
        </div>
        <div>
          <p className="text-xl text-primary font-bold">
            Basic Modal Variations
          </p>
          <p className="text-muted-foreground">
            Different ways to trigger the modal.
          </p>
          <Flex className="flex-col w-[100%] gap-0 mt-3">
            <Flex className="border border-muted rounded-t-lg p-2 shadow-md w-[100%] justify-center gap-4">
              <BasicModal trigger={<Menu size={24} />}>
                <div className="w-full grow flex flex-col shadow-lg bg-card/75 backdrop-blur-sm p-5 gap-8 rounded-xl text-start max-w-screen-sm">
                  <Flex className="justify-between items-center">
                    <ModalTitle>
                      <div className="flex gap-2 items-center shadow-sm px-2 rounded-full py-1">
                        <p className="text-sm">Modal</p>
                      </div>
                    </ModalTitle>
                    <ModalClose className="flex justify-end">
                      <X size={15} />
                    </ModalClose>
                  </Flex>
                  <p className="font-bold text-lg">🎉 I am a modal</p>
                </div>
              </BasicModal>
              <button
                onClick={() => modalRef.current?.onOpen()}
                className="p-2 bg-primary text-primary-foreground rounded"
              >
                Open Externally
              </button>
              <BasicModal
                ref={modalRef}
                trigger={<Star size={24} />}
                hideTrigger
              >
                <div className="w-full grow flex flex-col shadow-lg bg-card/75 backdrop-blur-sm p-5 gap-8 rounded-xl text-start max-w-screen-sm">
                  <Flex className="justify-between items-center">
                    <ModalTitle>
                      <div className="flex gap-2 items-center shadow-sm px-2 rounded-full py-1">
                        <p className="text-sm">Modal</p>
                      </div>
                    </ModalTitle>
                    <ModalClose className="flex justify-end">
                      <X size={15} />
                    </ModalClose>
                  </Flex>
                  <p className="font-bold text-lg">🎉 I am a modal</p>
                </div>
              </BasicModal>
            </Flex>
            <CodeBlock language="tsx">{`"use client";
import BasicModal, {
  ModalTitle,
  ModalClose,
} from "@/components/common/BasicModal";
import Flex from "@/components/common/Flex";
import { Menu } from "lucide-react";
import { useRef } from "react";

const Example = () => {
  const modalRef = useRef<{ onOpen: () => void; onClose: () => void } | null>(
    null
  );

  return (
    <>
      <BasicModal trigger={<Menu size={24} />}>
        <div className="w-full grow flex flex-col shadow-lg bg-card/75 backdrop-blur-sm p-5 gap-8 rounded-xl text-start max-w-screen-sm">
            <Flex className="justify-between items-center">
            <ModalTitle>
                <div className="flex gap-2 items-center shadow-sm px-2 rounded-full py-1">
                <p className="text-sm">Modal</p>
                </div>
            </ModalTitle>
            <ModalClose className="flex justify-end">
                <X size={15} />
            </ModalClose>
            </Flex>
            <p className="font-bold text-lg">🎉 I am a modal</p>
        </div>
      </BasicModal>

      <button
        onClick={() => modalRef.current?.onOpen()}
        className="p-2 bg-primary text-white rounded"
      >
        Open Externally
      </button>

      // Externally opened modal
      <BasicModal
        ref={modalRef}
        trigger={<Star size={24} />}
        hideTrigger
      >
        <div className="w-full grow flex flex-col shadow-lg bg-card/75 backdrop-blur-sm p-5 gap-8 rounded-xl text-start max-w-screen-sm">
            <Flex className="justify-between items-center">
            <ModalTitle>
                <div className="flex gap-2 items-center shadow-sm px-2 rounded-full py-1">
                <p className="text-sm">Modal</p>
                </div>
            </ModalTitle>
            <ModalClose className="flex justify-end">
                <X size={15} />
            </ModalClose>
            </Flex>
            <p className="font-bold text-lg">🎉 I am a modal</p>
        </div>
      </BasicModal>
    </>
  );
};

export default Example;`}</CodeBlock>
          </Flex>
        </div>

        <div>
          <p className="text-xl text-primary font-bold">
            Modal Positions & Directions
          </p>
          <p className="text-muted-foreground">
            Showing different positions and directions for the modal.
          </p>
          <Flex className="flex-col w-[100%] gap-0 mt-3">
            <Flex className="border border-muted rounded-t-lg p-2 shadow-md w-[100%] justify-center gap-4">
              <BasicModal
                trigger={<Star size={24} />}
                position="top"
                direction="top"
              >
                <div className="w-full grow flex flex-col shadow-lg bg-card/75 backdrop-blur-sm p-5 gap-8 rounded-xl text-start max-w-screen-sm">
                  <Flex className="justify-between items-center">
                    <ModalTitle>
                      <div className="flex gap-2 items-center shadow-sm px-2 rounded-full py-1">
                        <p className="text-sm">Modal</p>
                      </div>
                    </ModalTitle>
                    <ModalClose className="flex justify-end">
                      <X size={15} />
                    </ModalClose>
                  </Flex>
                  <p className="font-bold text-lg">🎉 I am a modal</p>
                </div>
              </BasicModal>
              <BasicModal
                trigger={<Bell size={24} />}
                position="bottom"
                direction="bottom"
              >
                <div className="w-full grow flex flex-col shadow-lg bg-card/75 backdrop-blur-sm p-5 gap-8 rounded-xl text-start max-w-screen-sm">
                  <Flex className="justify-between items-center">
                    <ModalTitle>
                      <div className="flex gap-2 items-center shadow-sm px-2 rounded-full py-1">
                        <p className="text-sm">Modal</p>
                      </div>
                    </ModalTitle>
                    <ModalClose className="flex justify-end">
                      <X size={15} />
                    </ModalClose>
                  </Flex>
                  <p className="font-bold text-lg">🎉 I am a modal</p>
                </div>
              </BasicModal>
              <BasicModal
                trigger={<Menu size={24} />}
                position="center"
                direction="right"
              >
                <div className="w-full grow flex flex-col shadow-lg bg-card/75 backdrop-blur-sm p-5 gap-8 rounded-xl text-start max-w-screen-sm">
                  <Flex className="justify-between items-center">
                    <ModalTitle>
                      <div className="flex gap-2 items-center shadow-sm px-2 rounded-full py-1">
                        <p className="text-sm">Modal</p>
                      </div>
                    </ModalTitle>
                    <ModalClose className="flex justify-end">
                      <X size={15} />
                    </ModalClose>
                  </Flex>
                  <p className="font-bold text-lg">🎉 I am a modal</p>
                </div>
              </BasicModal>
              <BasicModal
                trigger={<X size={24} />}
                position="center"
                direction="left"
              >
                <div className="w-full grow flex flex-col shadow-lg bg-card/75 backdrop-blur-sm p-5 gap-8 rounded-xl text-start max-w-screen-sm">
                  <Flex className="justify-between items-center">
                    <ModalTitle>
                      <div className="flex gap-2 items-center shadow-sm px-2 rounded-full py-1">
                        <p className="text-sm">Modal</p>
                      </div>
                    </ModalTitle>
                    <ModalClose className="flex justify-end">
                      <X size={15} />
                    </ModalClose>
                  </Flex>
                  <p className="font-bold text-lg">🎉 I am a modal</p>
                </div>
              </BasicModal>
            </Flex>
            <CodeBlock language="tsx">{`"use client";
import BasicModal, {
  ModalTitle,
  ModalClose,
} from "@/components/common/BasicModal";
import Flex from "@/components/common/Flex";
import { X, Menu, Star, Bell } from "lucide-react";

const Example = () => {
  return (
    <>
      <BasicModal
        trigger={<Star size={24} />}
        position="top"
        direction="top"
      >
        ...
      </BasicModal>

      <BasicModal
        trigger={<Bell size={24} />}
        position="bottom"
        direction="bottom"
      >
        ...
      </BasicModal>
      
      <BasicModal
        trigger={<Menu size={24} />}
        position="center"
        direction="right"
      >
        ...
      </BasicModal>

      <BasicModal
        trigger={<X size={24} />}
        position="center"
        direction="left"
      >
        ...
      </BasicModal>
    </>
  );
};

export default Example;`}</CodeBlock>
          </Flex>
        </div>

        <div>
          <p className="text-xl text-primary font-bold">
            With and Without Backdrop Effects
          </p>
          <Flex className="flex-col w-[100%] gap-0 mt-3">
            <Flex className="border border-muted rounded-t-lg p-2 shadow-md w-[100%] justify-center gap-4">
              <BasicModal
                trigger={<Menu size={24} />}
                useBackdropEffects
                OverlayProps={{ className: "bg-black/5 backdrop-blur-sm" }}
              >
                <div className="w-full grow flex flex-col shadow-lg bg-card/75 backdrop-blur-sm p-5 gap-8 rounded-xl text-start max-w-screen-sm">
                  <Flex className="justify-between items-center">
                    <ModalTitle>
                      <div className="flex gap-2 items-center shadow-sm px-2 rounded-full py-1">
                        <p className="text-sm">Modal</p>
                      </div>
                    </ModalTitle>
                    <ModalClose className="flex justify-end">
                      <X size={15} />
                    </ModalClose>
                  </Flex>
                  <p className="font-bold text-lg">🎉 I am a modal</p>
                </div>
              </BasicModal>
              <BasicModal trigger={<Settings size={24} />}>
                <div className="w-full grow flex flex-col shadow-lg bg-card/75 backdrop-blur-sm p-5 gap-8 rounded-xl text-start max-w-screen-sm">
                  <Flex className="justify-between items-center">
                    <ModalTitle>
                      <div className="flex gap-2 items-center shadow-sm px-2 rounded-full py-1">
                        <p className="text-sm">Modal</p>
                      </div>
                    </ModalTitle>
                    <ModalClose className="flex justify-end">
                      <X size={15} />
                    </ModalClose>
                  </Flex>
                  <p className="font-bold text-lg">🎉 I am a modal</p>
                </div>
              </BasicModal>
            </Flex>
            <CodeBlock language="tsx">{`"use client";
import BasicModal, {
  ModalTitle,
  ModalClose,
} from "@/components/common/BasicModal";
import Flex from "@/components/common/Flex";
import { Menu, Settings } from "lucide-react";

const Example = () => {
  return (
    <>
      <BasicModal
        trigger={<Menu size={24} />}
        useBackdropEffects
        OverlayProps={{ className: "bg-black/5 backdrop-blur-sm" }}
      >
        ...
      </BasicModal>

      <BasicModal trigger={<Settings size={24} />}>
        ...
      </BasicModal>
    </>
  );
};

export default Example;`}</CodeBlock>
          </Flex>
        </div>
        <PropsWrapper props={basicModalProps} />
        <DocsFooter />
      </Flex>
    </Flex>
  );
};

export default BasicModals;
