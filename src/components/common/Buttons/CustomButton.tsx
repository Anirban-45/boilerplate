import { Button, ActionIcon } from "@mantine/core";
import "./CustomButton.scss";

interface CustomButtonProps {
    variant: "primary" | "secondary" | "rounded";
    label: string;
    color: string;
    icon?: any;
    onClick?: () => void;
}

const CustomButton: preact.FunctionalComponent<CustomButtonProps> = ({
    variant,
    label,
    color,
    icon,
    onClick,
}) => {
    return (
        <Button
            className={`custom-button custom-button-${variant}`}
            onClick={onClick}
            leftIcon={<ActionIcon icon={icon} />}
            style={{ backgroundColor: color, color: "white" }}
        >
            {label}
        </Button>
    );
};

export default CustomButton;
