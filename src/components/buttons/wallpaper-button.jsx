const WallpaperButton = ({ children, fullWith, submit, disabled }) => {
  return (
    <button disabled={disabled} type={`${submit ? 'submit' : ''}`} className="fancy-button fancy-button--greip" style={{ fontSize: 13, width: fullWith ? '100%' : 'auto', height: 'fit-content', cursor: 'pointer' }}>
      <span>
        <span>{children}</span>
      </span>
    </button>
  );
};

export default WallpaperButton;
