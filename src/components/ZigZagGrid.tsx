import chunkIntoRows from "../hooks/Chucks";

type Props = {
  items: React.ReactNode[];
};

export const ZigZagGrid: React.FC<Props> = ({ items }) => {
  const rows = chunkIntoRows(items);

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
      {rows.map((row, rowIndex) => {
        const isSwapped = rowIndex % 2 === 1;
        const orderedRow = isSwapped ? [...row].reverse() : row;

        return (
          <div
            key={rowIndex}
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: 8,
              justifyItems: "center",
              alignItems: "center"
            }}
          >
            {orderedRow.map((item, index) => (
              <div key={index} className="cell">
                {item}
                {index % 2 ? <br />: <></>}
              </div>
            ))}
          </div>
        );
      })}
    </div>
  );
};