/*
 * @Author: 周林军 1799198652@qq.com
 * @Date: 2023-04-25 08:49:25
 * @LastEditors: github.com/TimeFlyingAway
 * @LastEditTime: 2024-04-12 00:23:01
 * @FilePath: \BH1750\generator\BH1750.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */


'use strict';
goog.provide('Blockly.Arduino.PixelMatrix');
goog.require('Blockly.Arduino');
Blockly.Arduino.forBlock.PixelMatrix_README = function () {
  var code = '';
  return code;
};
Blockly.Arduino.forBlock.PixelMatrix_INIT = function () {
  var value_PixelMatrix_INIT_PIN = Blockly.Arduino.valueToCode(this, 'PixelMatrix_INIT_PIN', Blockly.Arduino.ORDER_ATOMIC);
  var value_PixelMatrix_INIT_L = Blockly.Arduino.valueToCode(this, 'PixelMatrix_INIT_L', Blockly.Arduino.ORDER_ATOMIC);
  var value_PixelMatrix_INIT_H = Blockly.Arduino.valueToCode(this, 'PixelMatrix_INIT_H', Blockly.Arduino.ORDER_ATOMIC);
  var value_PixelMatrix_INIT_DS = Blockly.Arduino.valueToCode(this, 'PixelMatrix_INIT_DS', Blockly.Arduino.ORDER_ATOMIC);
  var dropdown_PixelMatrix_INIT_DIR = this.getFieldValue('PixelMatrix_INIT_DIR');
  var dropdown_PixelMatrix_INIT_CH_ORDER = this.getFieldValue('PixelMatrix_INIT_CH_ORDER');
  Blockly.Arduino.definitions_['include_' + 'PixelMatrix_INIT_1'] = '#include <Adafruit_GFX.h>\n'
    + '#include <FastLED.h>\n'
    + '#include <FastLED_NeoMatrix.h>\n'
    + '#include <Fonts/TomThumb.h> \n';
  Blockly.Arduino.definitions_['PixelMatrix_INIT_2'] = 'CRGB leds['
    + value_PixelMatrix_INIT_DS
    + '];\n'
    + 'FastLED_NeoMatrix *matrix;\n'
    + 'uint8_t colorW = 50;\n'
    + 'void initMatrix()\n'
    + '{ \n'
    + '  matrix = new FastLED_NeoMatrix(leds, '
    + value_PixelMatrix_INIT_L
    + ', '
    + value_PixelMatrix_INIT_H
    + ', NEO_MATRIX_TOP + NEO_MATRIX_LEFT + NEO_MATRIX_COLUMNS + '
    + dropdown_PixelMatrix_INIT_DIR
    + ');\n'
    + '  FastLED.addLeds<WS2812, '
    + value_PixelMatrix_INIT_PIN
    + ', '
    + dropdown_PixelMatrix_INIT_CH_ORDER
    + '>(leds, '
    + value_PixelMatrix_INIT_DS
    + ').setCorrection(TypicalLEDStrip);\n'
    + '  matrix->begin();\n'
    + '  matrix->setTextWrap(false);\n'
    + '  matrix->setBrightness(colorW);\n'
    + '  matrix->setFont(&TomThumb);\n'
    + '}\n';
  Blockly.Arduino.setups_['PixelMatrix_INIT_3'] = 'initMatrix();';
  var code = '';
  return code;
};
Blockly.Arduino.forBlock.PixelMatrix_INIT2 = function () {
  var value_PixelMatrix_INIT_PIN = Blockly.Arduino.valueToCode(this, 'PixelMatrix_INIT_PIN', Blockly.Arduino.ORDER_ATOMIC);
  var value_PixelMatrix_INIT_L = Blockly.Arduino.valueToCode(this, 'PixelMatrix_INIT_L', Blockly.Arduino.ORDER_ATOMIC);
  var value_PixelMatrix_INIT_H = Blockly.Arduino.valueToCode(this, 'PixelMatrix_INIT_H', Blockly.Arduino.ORDER_ATOMIC);
  var value_PixelMatrix_INIT_TilesX = Blockly.Arduino.valueToCode(this, 'PixelMatrix_INIT_TilesX', Blockly.Arduino.ORDER_ATOMIC);
  var value_PixelMatrix_INIT_TilesY = Blockly.Arduino.valueToCode(this, 'PixelMatrix_INIT_TilesY', Blockly.Arduino.ORDER_ATOMIC);
  var value_PixelMatrix_INIT_DS = Blockly.Arduino.valueToCode(this, 'PixelMatrix_INIT_DS', Blockly.Arduino.ORDER_ATOMIC);
  var dropdown_PixelMatrix_INIT_DIR = this.getFieldValue('PixelMatrix_INIT_DIR');
  var dropdown_PixelMatrix_INIT_CH_ORDER = this.getFieldValue('PixelMatrix_INIT_CH_ORDER');
  Blockly.Arduino.definitions_['include_' + 'PixelMatrix_INIT_1'] = '#include <Adafruit_GFX.h>\n'
    + '#include <FastLED.h>\n'
    + '#include <FastLED_NeoMatrix.h>\n'
    + '#include <Fonts/TomThumb.h> \n';
  Blockly.Arduino.definitions_['PixelMatrix_INIT_2'] = 'CRGB leds['
    + value_PixelMatrix_INIT_DS
    + '];\n'
    + 'FastLED_NeoMatrix *matrix;\n'
    + 'uint8_t colorW = 50;\n'
    + 'void initMatrix()\n'
    + '{ \n'
    + '  matrix = new FastLED_NeoMatrix(leds, '
    + value_PixelMatrix_INIT_L
    + ', '
    + value_PixelMatrix_INIT_H
    + ', '
    + value_PixelMatrix_INIT_TilesY
    + ', '
    + value_PixelMatrix_INIT_TilesX
    + ', NEO_MATRIX_TOP + NEO_MATRIX_LEFT + NEO_MATRIX_COLUMNS + '
    + dropdown_PixelMatrix_INIT_DIR
    + ');\n'
    + '  FastLED.addLeds<WS2812, '
    + value_PixelMatrix_INIT_PIN
    + ', '
    + dropdown_PixelMatrix_INIT_CH_ORDER
    + '>(leds, '
    + value_PixelMatrix_INIT_DS
    + ').setCorrection(TypicalLEDStrip);\n'
    + '  matrix->begin();\n'
    + '  matrix->setTextWrap(false);\n'
    + '  matrix->setBrightness(colorW);\n'
    + '  matrix->setFont(&TomThumb);\n'
    + '}\n';
  Blockly.Arduino.setups_['PixelMatrix_INIT_3'] = 'initMatrix();';
  var code = '';
  return code;
};
Blockly.Arduino.forBlock.PixelMatrix_CLEAR = function () {
  var code = 'matrix->clear();\n';
  return code;
};
Blockly.Arduino.forBlock.PixelMatrix_SZLD = function () {
  var value_PixelMatrix_SZLD_LD = Blockly.Arduino.valueToCode(this, 'PixelMatrix_SZLD_LD', Blockly.Arduino.ORDER_ATOMIC);
  var code = 'matrix->setBrightness('
    + value_PixelMatrix_SZLD_LD
    + ');\n';
  return code;
};
Blockly.Arduino.forBlock.PixelMatrix_YS = function () {
  var value_PixelMatrix_YS_R = Blockly.Arduino.valueToCode(this, 'PixelMatrix_YS_R', Blockly.Arduino.ORDER_ATOMIC);
  var value_PixelMatrix_YS_G = Blockly.Arduino.valueToCode(this, 'PixelMatrix_YS_G', Blockly.Arduino.ORDER_ATOMIC);
  var value_PixelMatrix_YS_B = Blockly.Arduino.valueToCode(this, 'PixelMatrix_YS_B', Blockly.Arduino.ORDER_ATOMIC);
  var code = 'matrix->Color('
    + value_PixelMatrix_YS_R
    + ','
    + value_PixelMatrix_YS_G
    + ','
    + value_PixelMatrix_YS_B
    + ')';
  return [code, Blockly.Arduino.ORDER_ATOMIC];
};
Blockly.Arduino.forBlock.PixelMatrix_ZTYS = function () {
  var value_PixelMatrix_ZTYS_SZ = Blockly.Arduino.valueToCode(this, 'PixelMatrix_ZTYS_SZ', Blockly.Arduino.ORDER_ATOMIC);
  var code = 'matrix->setTextColor('
    + value_PixelMatrix_ZTYS_SZ
    + ');\n';
  return code;
};
Blockly.Arduino.forBlock.PixelMatrix_FILL = function () {
  var value_PixelMatrix_FILL_YS = Blockly.Arduino.valueToCode(this, 'PixelMatrix_FILL_YS', Blockly.Arduino.ORDER_ATOMIC);
  var code = 'matrix->fillScreen('
    + value_PixelMatrix_FILL_YS
    + ');\n';
  return code;
};
Blockly.Arduino.forBlock.PixelMatrix_XSWB = function () {
  var value_PixelMatrix_XSWB_X = Blockly.Arduino.valueToCode(this, 'PixelMatrix_XSWB_X', Blockly.Arduino.ORDER_ATOMIC);
  var value_PixelMatrix_XSWB_Y = Blockly.Arduino.valueToCode(this, 'PixelMatrix_XSWB_Y', Blockly.Arduino.ORDER_ATOMIC);
  var value_PixelMatrix_XSWB_NR = Blockly.Arduino.valueToCode(this, 'PixelMatrix_XSWB_NR', Blockly.Arduino.ORDER_ATOMIC);
  var code = 'matrix->setCursor('
    + value_PixelMatrix_XSWB_X
    + ','
    + value_PixelMatrix_XSWB_Y
    + ');\nmatrix->print('
    + value_PixelMatrix_XSWB_NR
    + ');\n';
  return code;
};
Blockly.Arduino.forBlock.PixelMatrix_SX = function () {
  var code = 'matrix->show();\n';
  return code;
};
Blockly.Arduino.forBlock.PixelMatrix_HUADIAN = function () {
  var value_PixelMatrix_HUADIAN_X = Blockly.Arduino.valueToCode(this, 'PixelMatrix_HUADIAN_X', Blockly.Arduino.ORDER_ATOMIC);
  var value_PixelMatrix_HUADIAN_Y = Blockly.Arduino.valueToCode(this, 'PixelMatrix_HUADIAN_Y', Blockly.Arduino.ORDER_ATOMIC);
  var value_PixelMatrix_HUADIAN_YS = Blockly.Arduino.valueToCode(this, 'PixelMatrix_HUADIAN_YS', Blockly.Arduino.ORDER_ATOMIC);
  var code = 'matrix->drawPixel('
    + value_PixelMatrix_HUADIAN_X
    + ','
    + value_PixelMatrix_HUADIAN_Y
    + ','
    + value_PixelMatrix_HUADIAN_YS
    + ');\n';
  return code;
};
Blockly.Arduino.forBlock.PixelMatrix_HUACX = function () {
  var value_PixelMatrix_HUACX_X = Blockly.Arduino.valueToCode(this, 'PixelMatrix_HUACX_X', Blockly.Arduino.ORDER_ATOMIC);
  var value_PixelMatrix_HUACX_Y = Blockly.Arduino.valueToCode(this, 'PixelMatrix_HUACX_Y', Blockly.Arduino.ORDER_ATOMIC);
  var value_PixelMatrix_HUACX_CD = Blockly.Arduino.valueToCode(this, 'PixelMatrix_HUACX_CD', Blockly.Arduino.ORDER_ATOMIC);
  var dropdown_PixelMatrix_HUACX_LX = this.getFieldValue('PixelMatrix_HUACX_LX');
  var value_PixelMatrix_HUACX_YS = Blockly.Arduino.valueToCode(this, 'PixelMatrix_HUACX_YS', Blockly.Arduino.ORDER_ATOMIC);
  var code = 'matrix->'
    + dropdown_PixelMatrix_HUACX_LX
    + '('
    + value_PixelMatrix_HUACX_X
    + ','
    + value_PixelMatrix_HUACX_Y
    + ','
    + value_PixelMatrix_HUACX_CD
    + ','
    + value_PixelMatrix_HUACX_YS
    + ');\n';
  return code;
};
Blockly.Arduino.forBlock.PixelMatrix_HUAJX = function () {
  var value_PixelMatrix_HUAJX_X = Blockly.Arduino.valueToCode(this, 'PixelMatrix_HUAJX_X', Blockly.Arduino.ORDER_ATOMIC);
  var dropdown_PixelMatrix_HUAJX_LX = this.getFieldValue('PixelMatrix_HUAJX_LX');
  var value_PixelMatrix_HUAJX_Y = Blockly.Arduino.valueToCode(this, 'PixelMatrix_HUAJX_Y', Blockly.Arduino.ORDER_ATOMIC);
  var value_PixelMatrix_HUAJX_K = Blockly.Arduino.valueToCode(this, 'PixelMatrix_HUAJX_K', Blockly.Arduino.ORDER_ATOMIC);
  var value_PixelMatrix_HUAJX_G = Blockly.Arduino.valueToCode(this, 'PixelMatrix_HUAJX_G', Blockly.Arduino.ORDER_ATOMIC);
  var value_PixelMatrix_HUAJX_YS = Blockly.Arduino.valueToCode(this, 'PixelMatrix_HUAJX_YS', Blockly.Arduino.ORDER_ATOMIC);
  var code = 'matrix->'
    + dropdown_PixelMatrix_HUAJX_LX
    + '('
    + value_PixelMatrix_HUAJX_X
    + ','
    + value_PixelMatrix_HUAJX_Y
    + ','
    + value_PixelMatrix_HUAJX_K
    + ','
    + value_PixelMatrix_HUAJX_G
    + ','
    + value_PixelMatrix_HUAJX_YS
    + ');\n';
  return code;
};
Blockly.Arduino.forBlock.PixelMatrix_HUAYUAN = function () {
  var value_PixelMatrix_HUAYUAN_X = Blockly.Arduino.valueToCode(this, 'PixelMatrix_HUAYUAN_X', Blockly.Arduino.ORDER_ATOMIC);
  var dropdown_PixelMatrix_HUAYUAN_LX = this.getFieldValue('PixelMatrix_HUAYUAN_LX');
  var value_PixelMatrix_HUAYUAN_Y = Blockly.Arduino.valueToCode(this, 'PixelMatrix_HUAYUAN_Y', Blockly.Arduino.ORDER_ATOMIC);
  var value_PixelMatrix_HUAYUAN_R = Blockly.Arduino.valueToCode(this, 'PixelMatrix_HUAYUAN_R', Blockly.Arduino.ORDER_ATOMIC);
  var value_PixelMatrix_HUAYUAN_YS = Blockly.Arduino.valueToCode(this, 'PixelMatrix_HUAYUAN_YS', Blockly.Arduino.ORDER_ATOMIC);
  var code = 'matrix->'
    + dropdown_PixelMatrix_HUAYUAN_LX
    + '('
    + value_PixelMatrix_HUAYUAN_X
    + ','
    + value_PixelMatrix_HUAYUAN_Y
    + ','
    + value_PixelMatrix_HUAYUAN_R
    + ','
    + value_PixelMatrix_HUAYUAN_YS
    + ');\n';
  return code;
};
Blockly.Arduino.forBlock.PixelMatrix_MYFONT = function () {
  var varName = Blockly.Arduino.variableDB_.getName(this.getFieldValue('VAR'), Blockly.Variables.NAME_TYPE);
  var text = this.getFieldValue('TEXT');
  Blockly.Arduino.libs_[varName] = 'const uint16_t ' + varName + '[] PROGMEM = {\n' + text + '\n};\n';
  return '';
};
Blockly.Arduino.forBlock.PixelMatrix_XSTP = function () {
  var value_PixelMatrix_XSTP_X = Blockly.Arduino.valueToCode(this, 'PixelMatrix_XSTP_X', Blockly.Arduino.ORDER_ATOMIC);
  var value_PixelMatrix_XSTP_Y = Blockly.Arduino.valueToCode(this, 'PixelMatrix_XSTP_Y', Blockly.Arduino.ORDER_ATOMIC);
  var value_PixelMatrix_XSTP_KD = Blockly.Arduino.valueToCode(this, 'PixelMatrix_XSTP_KD', Blockly.Arduino.ORDER_ATOMIC);
  var value_PixelMatrix_XSTP_GD = Blockly.Arduino.valueToCode(this, 'PixelMatrix_XSTP_GD', Blockly.Arduino.ORDER_ATOMIC);
  var value_PixelMatrix_XSTP_MC = Blockly.Arduino.valueToCode(this, 'PixelMatrix_XSTP_MC', Blockly.Arduino.ORDER_ATOMIC);
  var code = 'matrix->drawRGBBitmap('
    + value_PixelMatrix_XSTP_X
    + ','
    + value_PixelMatrix_XSTP_Y
    + ','
    + value_PixelMatrix_XSTP_MC
    + ','
    + value_PixelMatrix_XSTP_KD
    + ','
    + value_PixelMatrix_XSTP_GD
    + ');\n';
  return code;
};
