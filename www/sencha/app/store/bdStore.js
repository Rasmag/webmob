/*
 * File: app/store/bdStore.js
 *
 * This file was generated by Sencha Architect version 2.2.3.
 * http://www.sencha.com/products/architect/
 *
 * This file requires use of the Sencha Touch 2.2.x library, under independent license.
 * License of Sencha Architect does not include license for Sencha Touch 2.2.x. For more
 * details see http://www.sencha.com/license or contact license@sencha.com.
 *
 * This file will be auto-generated each and everytime you save your project.
 *
 * Do NOT hand edit this file.
 */

Ext.define('devmob.store.bdStore', {
    extend: 'Ext.data.Store',

    requires: [
        'devmob.model.bd'
    ],

    config: {
        data: [
            {
                id: 1,
                nom: 'lucky luke',
                illustrateur: 'gosciny'
            },
            {
                id: 2,
                nom: 'Asterix',
                illustrateur: 'herge'
            }
        ],
        model: 'devmob.model.bd',
        storeId: 'bdStore',
        proxy: {
            type: 'ajax',
            reader: {
                type: 'json'
            }
        }
    }
});