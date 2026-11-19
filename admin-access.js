"use strict";

function parseAdminIds(value = process.env.BOT_ADMIN_IDS || "61596019734288") {
  return [...new Set(String(value)
    .split(/[,;\s]+/)
    .map(id => id.trim())
    .filter(Boolean))];
}

function isBotAdmin(senderID, configuredIds = process.env.BOT_ADMIN_IDS || "") {
  const id = String(senderID || "").trim();
  if (!id) return false;
  const admins = parseAdminIds(configuredIds);
  return admins.includes(id);
}

module.exports = { parseAdminIds, isBotAdmin };
