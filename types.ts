import colors from "@/json.constants/colors.json"
import indents from "@/json.constants/indents.json"
import textSizes from "@/json.constants/textSizes.json"
import borders from "@/json.constants/borders.json"
import textWeight from "@/json.constants/textWeight.json"

export interface IButton {
    background?: keyof typeof colors;
    indent?: keyof typeof indents;
    color?: keyof typeof colors;
    radius?: keyof typeof borders;
    align?: 'start' | 'center' | 'end';
    size?: keyof typeof textSizes;
    weight?: keyof typeof textWeight
    margin?: string;
}

export interface ICommonText {
    text: string
}

export interface IText {
    color?: keyof typeof colors;
    align?: 'start' | 'center' | 'end';
    size?: keyof typeof textSizes;
    weight?: keyof typeof textWeight
}

export interface IInput {
    width: string;
    border: string;
}

export interface IFolderWrapper {
    width: string;
    height: string;
    radius: keyof typeof borders;
    background: keyof typeof colors;

}
