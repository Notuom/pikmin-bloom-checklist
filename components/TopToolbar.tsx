import * as React from "react";

import { useViewContext, ViewContext } from "../context/ViewContext";
import { CollectionView } from "../utils/types";

interface RadioProps {
  label: string;
  value: CollectionView;
  view: CollectionView;
  onChange: React.ChangeEventHandler<HTMLInputElement>;
}

const ViewRadioButton: React.FC<RadioProps> = ({
  label,
  value,
  view,
  onChange,
}) => (
  <label>
    <input
      type="radio"
      value={value}
      checked={value === view}
      onChange={onChange}
    />
    {label}
  </label>
);

const descriptions: Record<CollectionView, string> = {
  [CollectionView.Simple]:
    "Track all the decors which the Pikmin Bloom game tracks with the Simple view.",
  [CollectionView.Advanced]:
    "Track all the decors which the Pikmin Bloom game tracks, plus roadside stickers, with the Advanced view.",
  [CollectionView.Exhaustive]:
    "Track all the decors which the Pikmin Bloom game tracks, plus roadside stickers in individual colors, with the Exhaustive view.",
};

export const TopToolbar: React.FC = () => {
  const { view, setView } = useViewContext();

  const onChange: React.ChangeEventHandler<HTMLInputElement> = (event) =>
    setView(event.target.value as CollectionView);

  return (
    <>
      <div>
        View:
        <ViewRadioButton
          label="Simple"
          view={view}
          value={CollectionView.Simple}
          onChange={onChange}
        />
        <ViewRadioButton
          label="Advanced"
          view={view}
          value={CollectionView.Advanced}
          onChange={onChange}
        />
        <ViewRadioButton
          label="Exhaustive"
          view={view}
          value={CollectionView.Exhaustive}
          onChange={onChange}
        />
      </div>
      <p>{descriptions[view]}</p>
    </>
  );
};
