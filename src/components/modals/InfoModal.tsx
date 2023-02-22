import { Cell } from "../grid/Cell";
import { BaseModal } from "./BaseModal";

type Props = {
  isOpen: boolean;
  handleClose: () => void;
};

export const InfoModal = ({ isOpen, handleClose }: Props) => {
  return (
    <BaseModal title="Cómo jugar" isOpen={isOpen} handleClose={handleClose}>
      <p className="text-sm text-left pt-2 text-gray-700 dark:text-gray-300">
        Adivina la palabra en cinco intentos.
        <br />
        <br />
        Cada intento debe ser una palabra válida de 5 letras.
        <br />
        <br />
        Después de cada intento el color de las letras cambia para mostrar qué
        tan cerca estás de acertar la palabra.
        <br />
        <br />
        <b>Ejemplos</b>
      </p>

      <div className="mb-1 mt-4 flex justify-center">
        <Cell
          isRevealing={true}
          isCompleted={true}
          value="G"
          status="correct"
        />
        <Cell value="A" />
        <Cell value="T" />
        <Cell value="O" />
        <Cell value="S" />
      </div>
      <p className="text-sm text-left pt-2 text-gray-700 dark:text-gray-300">
        La letra <b>G</b> está en la palabra y en la posición correcta.
      </p>

      <div className="mb-1 mt-4 flex justify-center">
        <Cell value="V" />
        <Cell value="O" />
        <Cell
          isRevealing={true}
          isCompleted={true}
          value="C"
          status="present"
        />
        <Cell value="A" />
        <Cell value="L" />
      </div>
      <p className="text-sm text-left pt-2 text-gray-700 dark:text-gray-300">
        La letra <b>C</b> está en la palabra pero en la posición incorrecta.
      </p>

      <div className="mb-1 mt-4 flex justify-center">
        <Cell value="C" />
        <Cell value="A" />
        <Cell value="N" />
        <Cell value="T" />
        <Cell isRevealing={true} isCompleted={true} status="absent" value="O" />
      </div>
      <p className="text-sm text-left pt-2 text-gray-700 dark:text-gray-300">
        La letra <b> O </b>no está en la palabra.
        <br />
        <br />
        Puede haber letras repetidas. Las pistas son independientes para cada
        letra.
        
        
      </p>
      <p className="text-sm pt-6 pb-8 text-gray-700 dark:text-gray-300">
      ¡Una palabra nueva cada 5 minutos!  
        
      </p>
      
      <button className="px-16 py-2 text-xl text-white font-bold rounded-md border bg-green-500  hover:bg-green-600 hover:border-transparent focus:outline-none focus:ring-1  focus:ring-offset-2" onClick={handleClose}>¡JUGAR!</button>


    </BaseModal>
  );
};
