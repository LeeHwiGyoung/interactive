import './DropDownContent.scss';

interface DropDownContentProps {
  children: React.ReactNode;
}

function DropDownContent({
  children,
}: DropDownContentProps): React.ReactElement {
  return (
    <div className="dropDown_content_wrap">
      <div className="dropDown_content_inner">{children}</div>
    </div>
  );
}

export default DropDownContent;
