/*
 * @Author: 周林军 1799198652@qq.com
 * @Date: 2023-05-04 09:12:04
 * @LastEditors: github.com/TimeFlyingAway
 * @LastEditTime: 2024-04-12 00:22:46
 * @FilePath: \Weather\block\Weather.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */

'use strict';
goog.provide('Blockly.Blocks.PixelMatrix');
goog.require('Blockly.Blocks');
Blockly.Blocks.PixelMatrix_README = {
    init: function () {
        this.setColour("#555555");
        this.appendDummyInput("").appendField(Blockly.Msg.PixelMatrix_README)
            .appendField(new Blockly.FieldTextInput('https://github.com/TimeFlyingAway/Mixly-PixelMatrix'), 'nulllab_rgbUltrasonic')
        this.setTooltip(Blockly.MIXLY_1617171136759936_2);
        this.setHelpUrl();
    }
};
Blockly.Blocks.PixelMatrix_INIT = {
    init: function () {
        this.appendValueInput("PixelMatrix_INIT_PIN")
            .setCheck(null)
            .appendField(Blockly.Msg.MIXLY_PixelMatrix_INIT_1);
        this.appendValueInput("PixelMatrix_INIT_H")
            .setCheck(null)
            .appendField(Blockly.Msg.MIXLY_PixelMatrix_INIT_3);
        this.appendValueInput("PixelMatrix_INIT_L")
            .setCheck(null)
            .appendField(Blockly.Msg.MIXLY_PixelMatrix_INIT_2);
        this.appendValueInput("PixelMatrix_INIT_DS")
            .setCheck(null)
            .appendField(Blockly.Msg.MIXLY_PixelMatrix_INIT_4);
        this.appendDummyInput("PixelMatrix_INIT_DIR")
            .appendField(Blockly.Msg.MIXLY_PixelMatrix_INIT_DIR_1)
            .appendField(
                new Blockly.FieldDropdown(
                    [
                        [Blockly.Msg.MIXLY_PixelMatrix_INIT_DIR_2, "NEO_MATRIX_PROGRESSIVE"],
                        [Blockly.Msg.MIXLY_PixelMatrix_INIT_DIR_3, "NEO_MATRIX_ZIGZAG"]
                    ]
                ),
                "PixelMatrix_INIT_DIR"
            )
        this.appendDummyInput("PixelMatrix_INIT_CH_ORDER")
            .appendField(Blockly.Msg.MIXLY_PixelMatrix_INIT_CH_ORDER_1)
            .appendField(
                new Blockly.FieldDropdown(
                    [
                        ["RGB", "RGB"],
                        ["BRG", "BRG"],
                        ["BGR", "BGR"],
                        ["RBG", "RBG"],
                        ["GBR", "GBR"],
                        ["GRB", "GRB"]
                    ]
                ),
                "PixelMatrix_INIT_CH_ORDER"
            )
        this.setInputsInline(true);
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(90);
        this.setTooltip("");
        this.setHelpUrl("");
    }
};
Blockly.Blocks.PixelMatrix_INIT2 = {
    init: function () {
        this.appendValueInput("PixelMatrix_INIT_PIN")
            .setCheck(null)
            .appendField(Blockly.Msg.MIXLY_PixelMatrix_INIT_5);
        this.appendValueInput("PixelMatrix_INIT_H")
            .setCheck(null)
            .appendField(Blockly.Msg.MIXLY_PixelMatrix_INIT_3);
        this.appendValueInput("PixelMatrix_INIT_L")
            .setCheck(null)
            .appendField(Blockly.Msg.MIXLY_PixelMatrix_INIT_2);
        this.appendValueInput("PixelMatrix_INIT_TilesX")
            .setCheck(null)
            .appendField(Blockly.Msg.MIXLY_PixelMatrix_INIT_6);
        this.appendValueInput("PixelMatrix_INIT_TilesY")
            .setCheck(null)
            .appendField(Blockly.Msg.MIXLY_PixelMatrix_INIT_7);
        this.appendValueInput("PixelMatrix_INIT_DS")
            .setCheck(null)
            .appendField(Blockly.Msg.MIXLY_PixelMatrix_INIT_4);
        this.appendDummyInput("PixelMatrix_INIT_DIR")
            .appendField(Blockly.Msg.MIXLY_PixelMatrix_INIT_DIR_1)
            .appendField(
                new Blockly.FieldDropdown(
                    [
                        [Blockly.Msg.MIXLY_PixelMatrix_INIT_DIR_2, "NEO_MATRIX_PROGRESSIVE"],
                        [Blockly.Msg.MIXLY_PixelMatrix_INIT_DIR_3, "NEO_MATRIX_ZIGZAG"]
                    ]
                ),
                "PixelMatrix_INIT_DIR"
            )
        this.appendDummyInput("PixelMatrix_INIT_CH_ORDER")
            .appendField(Blockly.Msg.MIXLY_PixelMatrix_INIT_CH_ORDER_1)
            .appendField(
                new Blockly.FieldDropdown(
                    [
                        ["RGB", "RGB"],
                        ["BRG", "BRG"],
                        ["BGR", "BGR"],
                        ["RBG", "RBG"],
                        ["GBR", "GBR"],
                        ["GRB", "GRB"]
                    ]
                ),
                "PixelMatrix_INIT_CH_ORDER"
            )
        this.setInputsInline(true);
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(90);
        this.setTooltip("");
        this.setHelpUrl("");
    }
};
Blockly.Blocks.PixelMatrix_CLEAR = {
    init: function () {
        this.appendDummyInput()
            .appendField(Blockly.Msg.MIXLY_PixelMatrix_CLEAR_1);
        this.setInputsInline(true);
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(90);
        this.setTooltip("");
        this.setHelpUrl("");
    }
};
Blockly.Blocks.PixelMatrix_SZLD = {
    init: function () {
        this.appendValueInput("PixelMatrix_SZLD_LD")
            .setCheck(null)
            .appendField(Blockly.Msg.MIXLY_PixelMatrix_SZLD_1);
        this.setInputsInline(true);
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(90);
        this.setTooltip(Blockly.Msg.MIXLY_PixelMatrix_SZLD_2);
        this.setHelpUrl("");
    }
};
Blockly.Blocks.PixelMatrix_YS = {
    init: function () {
        this.appendValueInput("PixelMatrix_YS_R")
            .setCheck(null)
            .appendField(Blockly.Msg.MIXLY_PixelMatrix_YS_1);
        this.appendValueInput("PixelMatrix_YS_G")
            .setCheck(null)
            .appendField("G");
        this.appendValueInput("PixelMatrix_YS_B")
            .setCheck(null)
            .appendField("B");
        this.setInputsInline(true);
        this.setOutput(true, null);
        this.setColour(90);
        this.setTooltip("");
        this.setHelpUrl("");
    }
};
Blockly.Blocks.PixelMatrix_ZTYS = {
    init: function () {
        this.appendValueInput("PixelMatrix_ZTYS_SZ")
            .setCheck(null)
            .appendField(Blockly.Msg.MIXLY_PixelMatrix_ZTYS_1);
        this.setInputsInline(true);
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(90);
        this.setTooltip("");
        this.setHelpUrl("");
    }
};
Blockly.Blocks.PixelMatrix_FILL = {
    init: function () {
        this.appendValueInput("PixelMatrix_FILL_YS")
            .setCheck(null)
            .appendField(Blockly.Msg.MIXLY_PixelMatrix_FILL_1);
        this.setInputsInline(true);
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(90);
        this.setTooltip("");
        this.setHelpUrl("");
    }
};
Blockly.Blocks.PixelMatrix_XSWB = {
    init: function () {
        this.appendValueInput("PixelMatrix_XSWB_X")
            .setCheck(null)
            .appendField(Blockly.Msg.MIXLY_PixelMatrix_XSWB_1);
        this.appendValueInput("PixelMatrix_XSWB_Y")
            .setCheck(null)
            .appendField(Blockly.Msg.MIXLY_PixelMatrix_XSWB_2);
        this.appendValueInput("PixelMatrix_XSWB_NR")
            .setCheck(null)
            .appendField(Blockly.Msg.MIXLY_PixelMatrix_XSWB_3);
        this.setInputsInline(true);
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(90);
        this.setTooltip("");
        this.setHelpUrl("");
    }
};
Blockly.Blocks.PixelMatrix_SX = {
    init: function () {
        this.appendDummyInput()
            .appendField(Blockly.Msg.MIXLY_PixelMatrix_SX_1);
        this.setInputsInline(true);
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(90);
        this.setTooltip("");
        this.setHelpUrl("");
    }
};
Blockly.Blocks.PixelMatrix_HUADIAN = {
    init: function () {
        this.appendValueInput("PixelMatrix_HUADIAN_X")
            .setCheck(null)
            .appendField(Blockly.Msg.MIXLY_PixelMatrix_HUADIAN_1);
        this.appendValueInput("PixelMatrix_HUADIAN_Y")
            .setCheck(null)
            .appendField("Y");
        this.appendValueInput("PixelMatrix_HUADIAN_YS")
            .setCheck(null)
            .appendField(Blockly.Msg.MIXLY_PixelMatrix_HUADIAN_2);
        this.setInputsInline(true);
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(90);
        this.setTooltip("");
        this.setHelpUrl("");
    }
};
Blockly.Blocks.PixelMatrix_HUACX = {
    init: function () {
        this.appendValueInput("PixelMatrix_HUACX_X")
            .setCheck(null)
            .appendField(Blockly.Msg.MIXLY_PixelMatrix_HUACX_1);
        this.appendValueInput("PixelMatrix_HUACX_Y")
            .setCheck(null)
            .appendField("Y");
        this.appendValueInput("PixelMatrix_HUACX_CD")
            .setCheck(null)
            .appendField(new Blockly.FieldDropdown([[Blockly.Msg.MIXLY_PixelMatrix_HUACX_2, "drawFastVLine"], [Blockly.Msg.MIXLY_PixelMatrix_HUACX_3, "drawFastHLine"]]), "PixelMatrix_HUACX_LX")
            .appendField(Blockly.Msg.MIXLY_PixelMatrix_HUACX_4);
        this.appendValueInput("PixelMatrix_HUACX_YS")
            .setCheck(null)
            .appendField(Blockly.Msg.MIXLY_PixelMatrix_HUACX_5);
        this.setInputsInline(true);
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(90);
        this.setTooltip("");
        this.setHelpUrl("");
    }
};
Blockly.Blocks.PixelMatrix_HUAJX = {
    init: function () {
        this.appendValueInput("PixelMatrix_HUAJX_X")
            .setCheck(null)
            .appendField(Blockly.Msg.MIXLY_PixelMatrix_HUAJX_1)
            .appendField(new Blockly.FieldDropdown([[Blockly.Msg.MIXLY_PixelMatrix_HUAJX_2, "drawRect"], [Blockly.Msg.MIXLY_PixelMatrix_HUAJX_3, "fillRect"]]), "PixelMatrix_HUAJX_LX")
            .appendField(Blockly.Msg.MIXLY_PixelMatrix_HUAJX_4);
        this.appendValueInput("PixelMatrix_HUAJX_Y")
            .setCheck(null)
            .appendField(Blockly.Msg.MIXLY_PixelMatrix_HUAJX_5);
        this.appendValueInput("PixelMatrix_HUAJX_K")
            .setCheck(null)
            .appendField(Blockly.Msg.MIXLY_PixelMatrix_HUAJX_6);
        this.appendValueInput("PixelMatrix_HUAJX_G")
            .setCheck(null)
            .appendField(Blockly.Msg.MIXLY_PixelMatrix_HUAJX_7);
        this.appendValueInput("PixelMatrix_HUAJX_YS")
            .setCheck(null)
            .appendField(Blockly.Msg.MIXLY_PixelMatrix_HUAJX_8);
        this.setInputsInline(true);
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(90);
        this.setTooltip("");
        this.setHelpUrl("");
    }
};
Blockly.Blocks.PixelMatrix_HUAYUAN = {
    init: function () {
        this.appendValueInput("PixelMatrix_HUAYUAN_X")
            .setCheck(null)
            .appendField(Blockly.Msg.MIXLY_PixelMatrix_HUAYUAN_1)
            .appendField(new Blockly.FieldDropdown([[Blockly.Msg.MIXLY_PixelMatrix_HUAYUAN_2, "drawCircle"], [Blockly.Msg.MIXLY_PixelMatrix_HUAYUAN_3, "fillCircle"]]), "PixelMatrix_HUAYUAN_LX");
        this.appendValueInput("PixelMatrix_HUAYUAN_Y")
            .setCheck(null)
            .appendField(Blockly.Msg.MIXLY_PixelMatrix_HUAYUAN_4);
        this.appendValueInput("PixelMatrix_HUAYUAN_R")
            .setCheck(null)
            .appendField(Blockly.Msg.MIXLY_PixelMatrix_HUAYUAN_5);
        this.appendValueInput("PixelMatrix_HUAYUAN_YS")
            .setCheck(null)
            .appendField(Blockly.Msg.MIXLY_PixelMatrix_HUAYUAN_6);
        this.setInputsInline(true);
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(90);
        this.setTooltip("");
        this.setHelpUrl("");
    }
};
//显示-TFT-定义字模名称和数据
Blockly.Blocks['PixelMatrix_MYFONT'] = {
    init: function () {
        this.setColour(90);
        this.appendDummyInput("")
            .appendField("PixelMatrix点阵")
            .appendField("图片名称")
            .appendField(new Blockly.FieldTextInput('ziti1'), 'VAR')
            .appendField("图片数据")
            .appendField(new Blockly.FieldTextInput('0x0000, 0x0000, 0x0000, 0x0000, 0x0000, 0x0000, 0x0000,0x0000'), 'TEXT');
        this.setPreviousStatement(true);
        this.setNextStatement(true);
        this.setColour(90);
        this.setTooltip("");
        this.setHelpUrl("");
    }
};
Blockly.Blocks.PixelMatrix_XSTP = {
    init: function () {
        this.appendValueInput("PixelMatrix_XSTP_X")
            .setCheck(null)
            .appendField(Blockly.Msg.MIXLY_PixelMatrix_XSTP_1);
        this.appendValueInput("PixelMatrix_XSTP_Y")
            .setCheck(null)
            .appendField(Blockly.Msg.MIXLY_PixelMatrix_XSTP_2);
        this.appendValueInput("PixelMatrix_XSTP_KD")
            .setCheck(null)
            .appendField(Blockly.Msg.MIXLY_PixelMatrix_XSTP_3);
        this.appendValueInput("PixelMatrix_XSTP_GD")
            .setCheck(null)
            .appendField(Blockly.Msg.MIXLY_PixelMatrix_XSTP_4);
        this.appendValueInput("PixelMatrix_XSTP_MC")
            .setCheck(null)
            .appendField(Blockly.Msg.MIXLY_PixelMatrix_XSTP_5);
        this.setInputsInline(true);
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(90);
        this.setTooltip("");
        this.setHelpUrl("");
    }
};
